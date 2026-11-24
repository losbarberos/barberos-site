const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

// Design tokens of the "Charte graphique Barberos" design system. Values are defined once as CSS variables in
// src/styles/globals.scss; spacing, radius (none), shadow-lg and the 768/1024 px breakpoints match Tailwind's defaults.
module.exports = {
  content: [join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {
      colors: {
        'brand-red': 'var(--brand-red)',
        'brand-blue': 'var(--brand-blue)',
        ink: 'var(--ink)',
        body: 'var(--text-body)',
        field: 'var(--text-field)',
        surface: 'var(--surface)',
        'surface-hover': 'var(--surface-hover)',
        'link-hover-line': 'var(--link-hover-line)',
        footer: 'var(--footer-bg)',
        'on-footer': 'var(--on-footer)',
        'footer-title': 'var(--footer-title)',
        'required-mark': 'var(--required-mark)',
      },
      fontFamily: {
        display: ['Cairo', '"Gill Sans"', '"Gill Sans MT"', 'Calibri', '"Trebuchet MS"', 'sans-serif'],
        body: ['Oxygen', '"Segoe UI"', 'Roboto', 'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'],
      },
      fontSize: {
        'title-page': ['30px', { lineHeight: '36px', fontWeight: '700' }],
        'title-section': ['20px', { lineHeight: '28px', fontWeight: '700' }],
        input: ['18px', '28px'],
        label: ['12px', { lineHeight: '16px', fontWeight: '700' }],
        'footer-heading': ['20px', { lineHeight: '28px', fontWeight: '700' }],
        small: ['12px', '16px'],
      },
      spacing: {
        pictogram: '128px',
      },
    },
  },
  plugins: [],
};
