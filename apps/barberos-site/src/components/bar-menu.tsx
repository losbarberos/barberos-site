import Link from 'next/link';
import { ReactNode } from 'react';

type BarMenuItemProps = {
  href: string;
  children: ReactNode;
};

const BarMenuItem = ({ href, children }: BarMenuItemProps) => (
  <li className="mx-2">
    <Link href={href}>
      {children}
    </Link>
  </li>
);

const BarMenu = () => (
  <ul className="flex flex-row flex-auto flex-wrap justify-center md:justify-end items-center px-0 list-none">
    <BarMenuItem href="/">Services</BarMenuItem>
    <BarMenuItem href="/portfolio">Portfolio</BarMenuItem>
    <BarMenuItem href="/about">À propos</BarMenuItem>
    <BarMenuItem href="/contact">Contact</BarMenuItem>
  </ul>
);

export default BarMenu;
