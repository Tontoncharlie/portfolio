"use client"

import React, { useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/home_images/Tonton.png" width={150} height={50}  alt="pic"/>
      </div>

      <div
        className={styles.hamburger}
        onClick={() => {setIsOpen(!isOpen)}}
        tabIndex={0}
        role="button"
        onKeyPress={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
      >
        ☰
      </div>

      <div className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
        <Link href="/"><h1 tabIndex={0} onClick={() => {setIsOpen(!isOpen)}}>HOME</h1></Link>
        <Link href="/about"><h1 tabIndex={0} onClick={() => {setIsOpen(!isOpen)}}>ABOUT</h1></Link>
        <Link href="/resume"><h1 tabIndex={0} onClick={() => {setIsOpen(!isOpen)}}>RESUME</h1></Link>
        <Link href="/services"><h1 tabIndex={0} onClick={() => {setIsOpen(!isOpen)}}>SERVICES</h1></Link>
        <Link href="/portfolio"><h1 tabIndex={0} onClick={() => {setIsOpen(!isOpen)}}>PROJECTS</h1></Link>
        <Link href="/contact"><h1 tabIndex={0} onClick={() => {setIsOpen(!isOpen)}}>CONTACT</h1></Link>
      </div>
    </nav>
  );
};

export default Navbar;
