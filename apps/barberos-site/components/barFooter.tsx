import React from 'react';
import Link from 'next/link';
import styles from './BarFooter.module.scss';

const BarFooter = () => (
  <footer className={styles.footer}>
    <div className={styles.title}>Barberos EURL</div>

    <ul className={styles.links}>
      <li>
        <Link href="/about">
          <a className="undecorated">À propos</a>
        </Link>
      </li>
      <li>
        <Link href="/legal-mentions">
          <a className="undecorated">Mentions légales</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a className="undecorated">Contact</a>
        </Link>
      </li>
      <li>
        <a className="undecorated" href="https://github.com/losbarberos" target="_blank" rel="noreferrer">
          Github
        </a>
      </li>
    </ul>

    <div className={styles.copyright}>Copyright © 2021 – Tous droits réservés</div>
  </footer>
);

export default BarFooter;
