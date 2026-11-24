import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import { contactUs } from '@/services/contact';
import { Route } from '../src/routes/contact';

jest.mock('@/services/contact', () => ({ contactUs: jest.fn() }));

const contactUsMock = contactUs as jest.MockedFunction<typeof contactUs>;
type Response = Awaited<ReturnType<typeof contactUs>>;

const FAILURE = /L’envoi du message a échoué/;

function renderPage() {
  const Page = Route.options.component;
  if (!Page) throw new Error('The contact route has no component');
  render(<Page />);
}

const field = (name: RegExp) => screen.getByLabelText(name) as HTMLInputElement | HTMLTextAreaElement;
const submitButton = () => screen.getByRole('button', { name: 'Envoyer' }) as HTMLButtonElement;
const status = () => screen.getByRole('status');

function fillForm() {
  fireEvent.change(field(/^Nom/), { target: { value: 'Jeanne Dupont' } });
  fireEvent.change(field(/^Email/), { target: { value: 'jeanne@example.com' } });
  fireEvent.change(field(/^Sujet/), { target: { value: 'Projet' } });
  fireEvent.change(field(/^Message/), { target: { value: 'Bonjour' } });
}

function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason: unknown) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

function expectValuesKept() {
  expect(field(/^Nom/).value).toBe('Jeanne Dupont');
  expect(field(/^Email/).value).toBe('jeanne@example.com');
  expect(field(/^Sujet/).value).toBe('Projet');
  expect(field(/^Message/).value).toBe('Bonjour');
}

describe('Contact', () => {
  beforeEach(() => contactUsMock.mockReset());

  it('gives every field an accessible name from its label', () => {
    renderPage();
    expect(field(/^Nom/).id).toBe('fromName');
    expect(field(/^Email/).id).toBe('fromEmail');
    expect(field(/^Sujet/).id).toBe('subject');
    expect(field(/^Message/).id).toBe('body');
    expect(screen.getByRole('textbox', { name: 'Message' }).tagName).toBe('TEXTAREA');
  });

  it('shows the validation errors linked to their fields and does not send', async () => {
    renderPage();
    fireEvent.click(submitButton());

    expect(await screen.findByText('Le nom est obligatoire')).toBeTruthy();
    expect(screen.getByText('L’email est obligatoire')).toBeTruthy();
    expect(screen.getByText('Le sujet est obligatoire')).toBeTruthy();
    expect(screen.getByText('Le message est obligatoire')).toBeTruthy();

    const name = field(/^Nom/);
    await waitFor(() => expect(document.activeElement).toBe(name));
    expect(name.getAttribute('aria-invalid')).toBe('true');
    const describedBy = name.getAttribute('aria-describedby');
    expect(describedBy && document.getElementById(describedBy)?.textContent).toBe('Le nom est obligatoire');
    expect(contactUsMock).not.toHaveBeenCalled();
  });

  it('rejects an invalid email and whitespace-only values', async () => {
    renderPage();
    fillForm();
    fireEvent.change(field(/^Email/), { target: { value: 'jeanne@' } });
    fireEvent.change(field(/^Sujet/), { target: { value: '   ' } });
    fireEvent.click(submitButton());

    expect(await screen.findByText('L’email saisi n’est pas valide')).toBeTruthy();
    expect(screen.getByText('Le sujet est obligatoire')).toBeTruthy();
    await waitFor(() => expect(document.activeElement).toBe(field(/^Email/)));
    expect(contactUsMock).not.toHaveBeenCalled();
  });

  it('clears the previous result when a new submit fails validation', async () => {
    contactUsMock.mockResolvedValue({ status: 200, text: 'OK' });
    renderPage();
    fillForm();
    fireEvent.click(submitButton());
    await waitFor(() => expect(status().textContent).toBe('Message envoyé'));

    fireEvent.click(submitButton());
    expect(await screen.findByText('Le nom est obligatoire')).toBeTruthy();
    expect(status().textContent).toBe('');
    expect(contactUsMock).toHaveBeenCalledTimes(1);
  });

  it('sends the message, shows a confirmation and resets the form', async () => {
    const response = deferred<Response>();
    contactUsMock.mockReturnValue(response.promise);
    renderPage();
    fillForm();
    fireEvent.change(field(/^Nom/), { target: { value: '  Jeanne Dupont  ' } });
    fireEvent.click(submitButton());

    await waitFor(() => expect(contactUsMock).toHaveBeenCalledTimes(1));
    expect(contactUsMock).toHaveBeenCalledWith({
      contactName: 'Jeanne Dupont',
      contactEmail: 'jeanne@example.com',
      subject: 'Projet',
      message: 'Bonjour',
    });
    expect(submitButton().disabled).toBe(true);

    await act(async () => response.resolve({ status: 200, text: 'OK' }));

    await waitFor(() => expect(status().textContent).toBe('Message envoyé'));
    expect(field(/^Nom/).value).toBe('');
    expect(field(/^Message/).value).toBe('');
    expect(submitButton().disabled).toBe(false);
  });

  it('keeps the values and re-enables the button when sending is rejected', async () => {
    const response = deferred<Response>();
    contactUsMock.mockReturnValue(response.promise);
    renderPage();
    fillForm();
    fireEvent.click(submitButton());

    await waitFor(() => expect(submitButton().disabled).toBe(true));
    await act(async () => response.reject(new Error('Network error')));

    await waitFor(() => expect(status().textContent).toMatch(FAILURE));
    expectValuesKept();
    expect(submitButton().disabled).toBe(false);
  });

  it('keeps the values and re-enables the button on a non-200 response', async () => {
    const response = deferred<Response>();
    contactUsMock.mockReturnValue(response.promise);
    renderPage();
    fillForm();
    fireEvent.click(submitButton());

    await waitFor(() => expect(submitButton().disabled).toBe(true));
    await act(async () => response.resolve({ status: 400, text: 'Bad Request' }));

    await waitFor(() => expect(status().textContent).toMatch(FAILURE));
    expectValuesKept();
    expect(submitButton().disabled).toBe(false);
  });
});
