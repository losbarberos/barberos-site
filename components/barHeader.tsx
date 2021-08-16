import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BarHeader.module.scss';
import barberos from '';

const BarHeader = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link href='/'>
        <a className='undecorated'>
          <img src='/images/barberos.svg' alt='Barberos' className={styles.logo} />
        </a>
      </Link>
    </nav>
  </header>
);

export default BarHeader;
