import { ReactNode } from 'react';

type Props = {
  id?: string;
  children?: ReactNode;
};
const BarFormErrorContainer = ({ id, children }: Props) => (
  <div id={id} className="mb-2 text-red-500 text-sm">
    {children}
  </div>
);

export default BarFormErrorContainer;
