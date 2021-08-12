import Image from 'next/image';
import React from 'react';
import styles from './BarSeparator.module.scss';
import horizontalSeparator from '../public/images/horizontal-separator.svg';

const BarSeparator = () => (
  <div className={styles.separator}>
    <Image src={horizontalSeparator} alt='---' layout='fixed' height='15' />
  </div>
);

export default BarSeparator;
