import React from 'react';
import styles from './BarFooter.module.scss';

const BarFooter = () => (
  <footer className={styles.footer}>
    <div className={styles.title}>Barberos EURL</div>

    <ul className={styles.links}>
      <li>À propos</li>
      <li>Mentions légales</li>
      <li>Contact</li>
      <li>Github</li>
    </ul>

    <div className={styles.copyright}>Copyright © 2021 – Tous droits réservés</div>
  </footer>
);

export default BarFooter;
