import '../styles/globals.scss';
import Head from "next/head";
import BarHeader from "../components/bar-header";
import BarSeparator from "../components/bar-separator";
import BarFooter from "../components/bar-footer";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Barberos',
  description: 'Barberos est une société de développement informatique spécialisée dans la conception d’applications Web complexes et performantes.',
};

export default function Layout({ children }) {
  return (
    <main className="min-h-screen w-full">
      <Head>
        <title>Barberos</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BarHeader />
      <BarSeparator />
      <div className="px-2 max-w-screen-md mx-auto">
        { children }
      </div>
      <BarFooter />
    </main>
  );
}
