import React from 'react';
import Link from 'next/link';

const BarFooter = () => (
  <footer className="text-[#ffffff] bg-[#555555] mt-12 py-4">
    <div className="text-[#aaa] font-bold text-xl text-center">Barberos EURL</div>

    <ul className="list-none list-outside p-0">
      <li className="w-full my-2 text-center">
        <Link href="/about" className="undecorated">
          À propos
        </Link>
      </li>
      <li className="w-full my-2 text-center">
        <Link href="/legal-mentions" className="undecorated">
          Mentions légales
        </Link>
      </li>
      <li className="w-full my-2 text-center">
        <Link href="/contact" className="undecorated">
          Contact
        </Link>
      </li>
      <li className="w-full my-2 text-center">
        <a className="undecorated" href="https://github.com/losbarberos" target="_blank" rel="noreferrer">
          Github
        </a>
      </li>
    </ul>

    <div className="text-xs text-center mt-2">Copyright © 2021 – Tous droits réservés</div>
  </footer>
);

export default BarFooter;
