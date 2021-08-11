import React from 'react';
import Image from 'next/image';
import styles from './BarHeader.module.scss';
import barberos from '../public/barberos.svg';

const BarHeader = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Image src={barberos} alt='Barberos' layout='fixed' height='65' className={styles.logo} />
    </nav>
  </header>
);

export default BarHeader;
