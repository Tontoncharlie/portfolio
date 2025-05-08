"use client"

import React, { useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>TONTON</div>

      <div
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        role="button"
        onKeyPress={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
      >
        ☰
      </div>

      <div className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
        <Link href="/"><h1 tabIndex={0}>HOME</h1></Link>
        <Link href="/about"><h1 tabIndex={0}>ABOUT</h1></Link>
        <Link href="/resume"><h1 tabIndex={0}>RESUME</h1></Link>
        <Link href="/services"><h1 tabIndex={0}>SERVICES</h1></Link>
        <Link href="/portfolio"><h1 tabIndex={0}>PORTFOLIO</h1></Link>
        <Link href="/contact"><h1 tabIndex={0}>CONTACT</h1></Link>
      </div>
    </nav>
  );
};

export default Navbar;
