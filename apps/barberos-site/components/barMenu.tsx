import React from "react";
import styles from "./BarMenu.module.scss";
import Link from "next/link";

const BarMenu = () => (
  <ul className={styles.menu}>
    <li>
      <Link href="/">
        <a>Services</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>À propos</a>
      </Link>
    </li>
    <li>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </li>
  </ul>
);

export default BarMenu;
