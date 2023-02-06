import React, { ReactNode } from 'react';
import Head from 'next/head';
import BarHeader from './barHeader';
import BarSeparator from './barSeparator';
import BarFooter from './barFooter';

type Props = {
  children?: ReactNode;
  title?: string;
};

const BarLayout = ({ children, title }: Props) => (
  <main className="min-h-screen w-full">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <BarHeader />
    <BarSeparator />
    <div className="px-2 max-w-screen-md mx-auto">{children}</div>
    <BarFooter />
  </main>
);

BarLayout.defaultProps = {
  children: [],
  title: 'Barberos',
};

export default BarLayout;
