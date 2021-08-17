import React from 'react';
import styles from './BarSeparator.module.scss';

const BarSeparator = () => (
  <div className={styles.separator}>
    <img src="/images/horizontal-separator.svg" alt="---" className={styles.separatorImg} />
  </div>
);

export default BarSeparator;
