import '../styles/globals.scss';
import BarHeader from '@/components/bar-header';
import BarSeparator from '@/components/bar-separator';
import BarFooter from '@/components/bar-footer';
import React, { PropsWithChildren } from 'react';
import { Metadata, Viewport } from 'next';

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
    <html lang="fr">
      <body className="h-full">
        <BarHeader />
        <BarSeparator />
        <main className="w-full mb-4">
          <div className="px-2 max-w-screen-md mx-auto">{children}</div>
        </main>
        <BarFooter />
      </body>
    </html>
  );
}
