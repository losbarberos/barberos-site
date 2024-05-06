import Link from 'next/link';
import { ReactNode } from 'react';

type BarMenuItemProps = {
  href: string;
  children: ReactNode;
};

const BarMenuItem = ({ href, children }: BarMenuItemProps) => (
  <li className="px-2">
    <Link href={href}>
      {children}
    </Link>
  </li>
);

const BarMenu = () => (
  <ul className="flex flex-row flex-wrap justify-center items-center px-0 list-none">
    <BarMenuItem href="/">Services</BarMenuItem>
    <BarMenuItem href="/portfolio">Portfolio</BarMenuItem>
    <BarMenuItem href="/about">À propos</BarMenuItem>
    <BarMenuItem href="/contact">Contact</BarMenuItem>
  </ul>
);

export default BarMenu;
