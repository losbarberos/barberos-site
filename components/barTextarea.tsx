import styles from './BarTextfield.module.scss';
import React, { ChangeEventHandler, FocusEventHandler } from 'react';
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
    <div className={`${styles.fieldWrapper} ${error ? styles.fieldInvalid : ''}`}>
      <Field as='textarea' id={name} name={name} className={styles.field} required={required} {...rest} />
      <label htmlFor='name' className={`${styles.label} ${error ? styles.labelInvalid : ''}`}>
        {label}
        {required && <span className={styles.requiredMark}>*</span>}
      </label>
    </div>
  );
};

export default BarTextarea;
