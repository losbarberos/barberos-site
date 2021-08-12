import styles from './BarButton.module.scss';
import React from 'react';

type Props = {
  label: string;
  type?: 'button' | 'reset' | 'submit';
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean
};

const BarButton = ({label, type, onClick, disabled = false}: Props) => {
  return (
    <button type={type || 'button'} onClick={onClick} className={styles.button} disabled={disabled}>
      {label}
    </button>
  );
};

export default BarButton;
