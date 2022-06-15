import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import styles from './BarHeader.module.scss';
import BarMenu from "./barMenu";

const BarHeader = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  let sticky = '';
  if (scrollTop > 100) {
    sticky = styles.stickyHeader;
  }

  return (
    <header className={[styles.header, sticky].join(' ')}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className="undecorated">
            <img src="/images/barberos.svg" alt="Barberos" className={styles.logo}/>
          </a>
        </Link>

        <div className={styles.menu}>
          <BarMenu/>
        </div>
      </nav>
    </header>
  );
}

export default BarHeader;
