import React from 'react';

type Props = {
  label: string;
  type?: 'button' | 'reset' | 'submit';
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
};

const BarButton = ({ label, type, onClick, disabled = false }: Props) => {
  return (
    <button type={type || 'button'} onClick={onClick} className="p-2 border-2 border-black border-solid bg-white uppercase rounded-none hover:bg-gray-100 focus:bg-gray-100 cursor-pointer" disabled={disabled}>
      {label}
    </button>
  );
};

export default BarButton;
