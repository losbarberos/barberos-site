import React from 'react';
import { Field } from 'formik';

type Props = {
  name: string;
  label: string;
  error?: boolean;
  required?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
};

const BarTextarea = ({ name, label, error, required, ...rest }: Props) => {
  return (
    <div className="relative mb-2 border border-solid border-ink rounded-none focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand-blue">
      <Field
        as="textarea"
        id={name}
        name={name}
        className="bg-none bg-transparent p-2 pt-5 block border-none focus:outline-none rounded-none text-input text-field w-full"
        required={required}
        {...rest}
      />
      <label
        htmlFor="name"
        className={`absolute text-label uppercase left-1 top-0 transition delay-100 ease-in-out pointer-events-none ${error ? 'text-brand-red' : 'text-body'}`}
      >
        {label}
        {required && (
          <span className="text-required-mark" aria-hidden="true">
            *
          </span>
        )}
      </label>
    </div>
  );
};

export default BarTextarea;
