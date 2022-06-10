import { ReactNode } from 'react';
import styles from './BarFormErrorContainer.module.scss';

type Props = {
  children?: ReactNode;
};
const BarFormErrorContainer = ({ children }: Props) => <div className={styles.errorMessage}>{children}</div>;

export default BarFormErrorContainer;
