import React from 'react';
import { Link } from '@tanstack/react-router';

const BarFooter = () => (
  <footer className="bar-footer text-on-footer bg-footer flex-shrink-0 py-4">
    <div className="text-footer-title text-footer-heading text-center">Barberos SARL</div>

    <ul className="list-none list-outside p-0 mt-4">
      <li className="w-full my-2 text-center">
        <Link to="/about" className="undecorated">
          À propos
        </Link>
      </li>
      <li className="w-full my-2 text-center">
        <Link to="/legal-mentions" className="undecorated">
          Mentions légales
        </Link>
      </li>
      <li className="w-full my-2 text-center">
        <Link to="/contact" className="undecorated">
          Contact
        </Link>
      </li>
      <li className="w-full my-2 text-center">
        <a className="undecorated" href="https://github.com/losbarberos" target="_blank" rel="noreferrer">
          Github
        </a>
      </li>
    </ul>

    <div className="text-small text-center mt-2">Copyright © 2021-2024 – Tous droits réservés</div>
  </footer>
);

export default BarFooter;
