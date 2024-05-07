'use client';

import React, { PropsWithChildren } from 'react';
import { useStickyLayout } from '../providers/sticky-layout';

export const BarMain = ({ children }: PropsWithChildren) => {
  const { sticky } = useStickyLayout();

  const stickyStyle = sticky ? 'pt-36 md:pt-24' : '';
  return (
    <main className={ `w-full mb-12 flex-grow ${stickyStyle}` }>
      <div className="px-2 max-w-screen-md mx-auto">{ children }</div>
    </main>
  );
};
