import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BarHeader.module.scss';
import barberos from '../public/images/barberos.svg';

const BarHeader = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link href='/'>
        <a className="undecorated"><Image src={barberos} alt='Barberos' layout='fixed' height='65' className={styles.logo} /></a>
      </Link>
    </nav>
  </header>
);

export default BarHeader;
