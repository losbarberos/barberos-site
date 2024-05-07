import '../styles/globals.scss';
import BarHeader from '@/components/bar-header';
import BarSeparator from '@/components/bar-separator';
import BarFooter from '@/components/bar-footer';
import React, { PropsWithChildren } from 'react';
import { Metadata, Viewport } from 'next';
import { StickyLayoutProvider } from '../providers/sticky-layout';
import { BarMain } from '@/components/bar-main';

export const metadata: Metadata = {
  title: 'Barberos',
  description:
    'Barberos est une société de développement informatique spécialisée dans la conception d’applications Web complexes et performantes.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="fr" className="h-full">
      <body className="h-full flex flex-col">
        <StickyLayoutProvider>
          <BarHeader />
          <BarSeparator />
          <BarMain>{children}</BarMain>
          <BarFooter />
        </StickyLayoutProvider>
      </body>
    </html>
  );
}
