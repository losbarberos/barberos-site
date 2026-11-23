import React from 'react';
import { render, screen } from '@testing-library/react';

import { Route } from '../src/routes/index';

describe('Index', () => {
  it('should render successfully', () => {
    const Page = Route.options.component;
    expect(Page).toBeDefined();
    if (Page) render(<Page />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Conception d’applications et sites Web');
  });
});
