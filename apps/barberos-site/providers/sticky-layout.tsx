'use client';

import { createContext, PropsWithChildren, useContext, useLayoutEffect, useState } from 'react';

export type StickyLayoutContextType = {
  sticky: boolean;
};

const StickyLayoutContext = createContext<StickyLayoutContextType>({ sticky: false });

export const StickyLayoutProvider = ({ children }: PropsWithChildren) => {
  const [sticky, setSticky] = useState(false);

  useLayoutEffect(() => {
    const onScroll = (e: Event) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const scrollTop = (e.target! as Document).documentElement.scrollTop;
      if (sticky && scrollTop <= 99) {
        setSticky(false);
      } else if (!sticky && scrollTop >= 100) {
        setSticky(true);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [sticky]);

  return <StickyLayoutContext.Provider value={{ sticky: sticky }}>{children}</StickyLayoutContext.Provider>;
};

export const useStickyLayout = () => {
  return useContext(StickyLayoutContext);
};
