'use client';

import React, { useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/barberos.svg';
import BarMenu from '@/components/bar-menu';

const BarHeader = () => {
  const [stickyHeader, setStickyHeader] = useState(false);

  useLayoutEffect(() => {
    const onScroll = (e: Event) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const scrollTop = (e.target! as Document).documentElement.scrollTop;
      if (stickyHeader && scrollTop <= 99) {
        setStickyHeader(false);
      } else if (!stickyHeader && scrollTop >= 100) {
        setStickyHeader(true);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [stickyHeader]);

  let stickyHeaderStyle = 'relative';
  let stickyLogoStyle = '';
  if (stickyHeader) {
    stickyHeaderStyle = 'fixed shadow-lg p-1';
    stickyLogoStyle = '!w-36 md:my-6';
  }

  return (
    <header className={`w-full top-0 z-50 bg-white ${stickyHeaderStyle}`}>
      <nav className={`flex flex-col items-center gap-6 md:flex-row my-4 max-w-screen-md mx-auto justify-between`}>
        <Link href="/" className="undecorated">
          <Image src={logo} alt="Barberos" className={`w-48 ${stickyLogoStyle}`} />
        </Link>
        <BarMenu />
      </nav>
    </header>
  );
};

export default BarHeader;
