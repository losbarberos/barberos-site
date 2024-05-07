'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/barberos.svg';
import BarMenu from '@/components/bar-menu';
import { useStickyLayout } from '../providers/sticky-layout';

const BarHeader = () => {
  const { sticky } = useStickyLayout();

  let stickyHeaderStyle = 'relative h-40';
  let stickyLogoStyle = '';
  if (sticky) {
    stickyHeaderStyle = 'fixed shadow-lg p-1 h-32';
    stickyLogoStyle = '!h-10 md:my-6';
  }

  return (
    <header className={`w-full top-0 z-50 bg-white ${stickyHeaderStyle}`}>
      <nav className={`flex flex-col items-center gap-6 md:flex-row my-4 max-w-screen-md mx-auto justify-between`}>
        <Link href="/" className="undecorated w-32">
          <Image src={logo} alt="Barberos" className={`h-16 object-contain ${stickyLogoStyle}`} />
        </Link>
        <BarMenu />
      </nav>
    </header>
  );
};

export default BarHeader;
