import { Link, type LinkProps } from '@tanstack/react-router';
import { ReactNode } from 'react';

type BarMenuItemProps = {
  to: LinkProps['to'];
  children: ReactNode;
};

const BarMenuItem = ({ to, children }: BarMenuItemProps) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
);

const BarMenu = () => (
  <ul className="flex flex-row flex-auto flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-2 m-0 px-0 list-none">
    <BarMenuItem to="/">Services</BarMenuItem>
    <BarMenuItem to="/portfolio">Portfolio</BarMenuItem>
    <BarMenuItem to="/about">À propos</BarMenuItem>
    <BarMenuItem to="/contact">Contact</BarMenuItem>
  </ul>
);

export default BarMenu;
