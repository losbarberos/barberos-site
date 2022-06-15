import React, { ReactNode } from 'react';
import Head from 'next/head';
import BarHeader from './barHeader';
import BarSeparator from './barSeparator';
import BarFooter from './barFooter';
import styles from './BarLayout.module.scss';
import BarMenu from "./barMenu";

type Props = {
  children?: ReactNode;
  title?: string;
};

const BarLayout = ({ children, title }: Props) => (
  <main className={styles.layout}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <BarHeader />
    <BarSeparator />
    <nav className={styles.container}>
     <BarMenu/>
    </nav>
    <BarSeparator />
    <div className={styles.container}>{children}</div>
    <BarFooter />
  </main>
);

BarLayout.defaultProps = {
  children: [],
  title: 'Barberos - Conseil et conception logicielle',
};

export default BarLayout;
