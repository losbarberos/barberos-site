import React from 'react';
import Link from 'next/link';
import styles from './BarFooter.module.scss';

const BarFooter = () => (
  <footer className={styles.footer}>
    <div className={styles.title}>Barberos EURL</div>

    <ul className={styles.links}>
      <li>
        <Link href="/about" className="undecorated">
          À propos
        </Link>
      </li>
      <li>
        <Link href="/legal-mentions" className="undecorated">
          Mentions légales
        </Link>
      </li>
      <li>
        <Link href="/contact" className="undecorated">
          Contact
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
