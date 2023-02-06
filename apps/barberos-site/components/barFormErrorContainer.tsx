import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};
const BarFormErrorContainer = ({ children }: Props) => <div className="mb-2 text-red-500 text-sm">{children}</div>;

export default BarFormErrorContainer;
