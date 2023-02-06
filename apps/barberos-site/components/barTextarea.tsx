import React from 'react';
import { Field } from 'formik';

type Props = {
  name: string;
  label: string;
  error?: boolean;
  required?: boolean;
  [x: string]: any;
};

const BarTextarea = ({ name, label, error, required, ...rest }: Props) => {
  return (
    <div className={`relative mb-2 border border-solid border-black ${error ? 'border-red-500' : ''}`}>
      <Field as="textarea" id={name} name={name} className="bg-none bg-transparent p-2 pt-5 block border-none focus:outline-none rounded-none text-lg text-gray-600 w-full" required={required} {...rest} />
      <label htmlFor="name" className={`absolute text-xs text-gray-700 font-bold uppercase left-1 -top-0 transition delay-100 ease-in-out pointer-events-none ${error ? 'text-red-500' : ''}`}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};

export default BarTextarea;
