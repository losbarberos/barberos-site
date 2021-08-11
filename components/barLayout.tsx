import React, { ReactNode } from 'react';
import Head from 'next/head';
import BarHeader from './barHeader';
import BarSeparator from './barSeparator';
import BarFooter from './barFooter';
import styles from './BarLayout.module.scss';

type Props = {
  children?: ReactNode;
  title?: string;
};

const BarLayout = ({ children, title }: Props) => (
  <main className={styles.layout}>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <BarHeader />
    <BarSeparator />
    {children}
    <BarFooter />
  </main>
);

BarLayout.defaultProps = {
  children: [],
  title: 'Barberos',
};

export default BarLayout;
