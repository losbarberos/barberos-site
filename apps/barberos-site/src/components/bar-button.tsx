import React from 'react';

type Props = {
  label: string;
  type?: 'button' | 'reset' | 'submit';
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
};

const BarButton = ({ label, type, onClick, disabled = false }: Props) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className="p-2 border-2 border-ink border-solid bg-surface text-ink uppercase rounded-none hover:bg-surface-hover focus:bg-surface-hover cursor-pointer disabled:cursor-default"
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default BarButton;
