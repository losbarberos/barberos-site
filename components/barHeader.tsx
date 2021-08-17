import React from 'react';
import Link from 'next/link';
import styles from './BarHeader.module.scss';

const BarHeader = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link href="/">
        <a className="undecorated">
          <img src="/images/barberos.svg" alt="Barberos" className={styles.logo} />
        </a>
      </Link>
    </nav>
  </header>
);

export default BarHeader;
