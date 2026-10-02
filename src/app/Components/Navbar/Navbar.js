"use client";

import React, { useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'RESUME', path: '/resume' },
  { label: 'SERVICES', path: '/services' },
  { label: 'PROJECTS', path: '/portfolio' },
  { label: 'CONTACT', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/home_images/Tonton.png" 
            width={140} 
            height={45}  
            alt="Tonton Logo"
            priority
            className="object-contain hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Links */}
        <div className={styles.navLinks}>
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.path} 
                href={item.path}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              >
                <span>{item.label}</span>
                {isActive && <span className={styles.activeDot} />}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`${styles.bar} ${isOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${isOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${isOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuShow : ''}`}>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`${styles.mobileNavItem} ${isActive ? styles.mobileActive : ''}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

