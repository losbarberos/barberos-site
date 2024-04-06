import React from 'react';
import Link from 'next/link';

const BarHeader = () => (
  <header className="w-full">
    <nav className="flex flex-row justify-center my-4">
      <Link href="/" className="undecorated">
        <img src="/images/barberos.svg" alt="Barberos" className="w-48" />
      </Link>
    </nav>
  </header>
);

export default BarHeader;
