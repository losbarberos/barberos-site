import styles from './BarTextfield.module.scss';
import React, { ChangeEvent, ChangeEventHandler, FocusEventHandler } from 'react';
import { Field } from 'formik';

type Props = {
  name: string;
  label: string;
  type?: string;
  error?: boolean;
  required?: boolean;
  [x: string]: any;
};

const BarTextfield = ({name, label, type, error, required, ...rest}: Props) => {
  return (
    <div className={`${styles.fieldWrapper} ${error ? styles.fieldInvalid : ''}`}>
      <Field id={name} name={name} type={type || 'text'} className={styles.field} required={required} {...rest}/>
      <label htmlFor="name" className={`${styles.label} ${error ? styles.labelInvalid : ''}`}>
        {label}
        {required && <span className={styles.requiredMark}>*</span>}
      </label>
    </div>
  );
};

export default BarTextfield;
