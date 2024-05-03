'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import logo from '../public/images/barberos.svg';

const BarHeader = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e: Event) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setScrollTop((e.target! as Document).documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  let stickyHeader = '';
  let stickyNav = '';
  let stickyLogo = '';
  if (scrollTop > 100) {
    stickyHeader = 'sticky shadow-lg p-1';
    stickyNav = 'max-w-screen-md mx-auto justify-between';
    stickyLogo = 'w-36';
  }

  return (
    <header className={`w-full relative top-0 z-50 bg-white ${stickyHeader}`}>
      <nav className={`flex flex-row justify-center my-4 ${stickyNav}`}>
        <Link href="/" className="undecorated">
          <Image src={logo} alt="Barberos" className={`w-48 ${stickyLogo}`} />
        </Link>
      </nav>
    </header>
  );
};

export default BarHeader;
