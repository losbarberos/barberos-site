import { ErrorMessage, Form, Formik, useFormikContext } from 'formik';
import { useCallback, useEffect, useRef, useState } from 'react';
import BarTextfield from '@/components/bar-textfield';
import BarTextarea from '@/components/bar-textarea';
import BarButton from '@/components/bar-button';
import BarFormErrorContainer from '@/components/bar-form-error-container';
import { contactUs } from '@/services/contact';
import { createFileRoute } from '@tanstack/react-router';

type Values = {
  fromName: string;
  fromEmail: string;
  subject: string;
  body: string;
};
type Errors = {
  fromName?: string;
  fromEmail?: string;
  subject?: string;
  body?: string;
};

const SUCCESS_MESSAGE = 'Message envoyé';
const FAILURE_MESSAGE = 'L’envoi du message a échoué. Veuillez réessayer plus tard ou nous écrire à contact@barberos.fr.';

/**
 * Without native validation (`noValidate`), moves the focus to the first invalid field after a failed submit,
 * so that keyboard and screen-reader users reach the error, and clears the previous result when a submit starts.
 */
function FormSubmitEffects({ onSubmitStart }: { onSubmitStart: () => void }) {
  const { isSubmitting, submitCount, errors } = useFormikContext<Values>();
  const handledSubmitCount = useRef(0);

  useEffect(() => {
    if (isSubmitting) onSubmitStart();
  }, [isSubmitting, onSubmitStart]);

  useEffect(() => {
    if (isSubmitting || submitCount === handledSubmitCount.current) return;
    handledSubmitCount.current = submitCount;
    const firstInvalidField = Object.keys(errors)[0];
    if (firstInvalidField) document.getElementById(firstInvalidField)?.focus();
  }, [isSubmitting, submitCount, errors]);

  return null;
}

export const Route = createFileRoute('/contact')({
  head: () => ({ meta: [{ title: 'Barberos — Contact' }] }),
  component: Page,
});

function Page() {
  function validate() {
    return (values: Values): Errors => {
      const errors: Errors = {};

      if (!values.fromName.trim()) errors.fromName = `Le nom est obligatoire`;

      if (!values.fromEmail.trim()) {
        errors.fromEmail = `L’email est obligatoire`;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.fromEmail.trim())) {
        errors.fromEmail = `L’email saisi n’est pas valide`;
      }

      if (!values.subject.trim()) errors.subject = `Le sujet est obligatoire`;

      if (!values.body.trim()) errors.body = `Le message est obligatoire`;

      return errors;
    };
  }

  const renderErrorMessage = (name: keyof Values) => (errorMessage: string) => (
    <BarFormErrorContainer id={`${name}-error`}>{errorMessage}</BarFormErrorContainer>
  );
  const [resultMessage, setResultMessage] = useState<string>();
  const clearResultMessage = useCallback(() => setResultMessage(undefined), []);

  return (
    <>
      <h1>Contact</h1>

      <section>
        <div>
          <strong>Barberos SARL</strong>
        </div>
        <div>Siren : 902 205 202</div>
      </section>

      <section className="contact-line">
        <div>
          <img src="/icons/address.svg" alt="Adresse" width="512" height="512" />
        </div>
        <div>
          21 rue Charles Martel
          <br />
          54250 CHAMPIGNEULLES
        </div>
      </section>
      <section className="contact-line">
        <div>
          <img src="/icons/phone.svg" alt="Téléphone" width="512" height="512" />
        </div>
        <div>07 80 98 40 00</div>
      </section>

      <section className="contact-line">
        <div>
          <img src="/icons/email.svg" alt="Email" width="512" height="512" />
        </div>
        <div>contact@barberos.fr</div>
      </section>

      <h4 className="flex flex-row justify-center items-center contact-form-title">
        <img alt="Message" src="/icons/mail.svg" height="24" className="h-6 w-6" />
        Envoyer un message
      </h4>

      <Formik
        initialValues={{ fromName: '', fromEmail: '', subject: '', body: '' }}
        validate={validate()}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await contactUs({
              contactName: values.fromName.trim(),
              contactEmail: values.fromEmail.trim(),
              subject: values.subject.trim(),
              message: values.body.trim(),
            });
            if (response.status === 200) {
              resetForm();
              setResultMessage(SUCCESS_MESSAGE);
            } else {
              setResultMessage(FAILURE_MESSAGE);
            }
          } catch {
            setResultMessage(FAILURE_MESSAGE);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form noValidate>
            <FormSubmitEffects onSubmitStart={clearResultMessage} />
            <BarTextfield name="fromName" label="Nom" error={touched.fromName && !!errors.fromName} required />
            <ErrorMessage name="fromName" render={renderErrorMessage('fromName')} />

            <BarTextfield name="fromEmail" label="Email" type="email" error={touched.fromEmail && !!errors.fromEmail} required />
            <ErrorMessage name="fromEmail" render={renderErrorMessage('fromEmail')} />

            <BarTextfield name="subject" label="Sujet" error={touched.subject && !!errors.subject} required />
            <ErrorMessage name="subject" render={renderErrorMessage('subject')} />

            <BarTextarea name="body" label="Message" rows={6} error={touched.body && !!errors.body} required />
            <ErrorMessage name="body" render={renderErrorMessage('body')} />

            <div className="form-actions">
              <span role="status" aria-live="polite" className={resultMessage ? 'form-result-message' : undefined}>
                {resultMessage}
              </span>
              <BarButton type={'submit'} disabled={isSubmitting} label={'Envoyer'} />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
