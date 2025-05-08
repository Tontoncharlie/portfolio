import React from 'react';
import styles from './navbar.module.css'
import Link from 'next/link';

const Navbar = () => {
  return (
       <div className={`${styles.navbar}`}>
        <Link href="/"><h1 tabIndex={40}>HOME</h1></Link>
        <Link href="/about"><h1 tabIndex={40}>ABOUT</h1></Link>
        <Link href="/resume"><h1 tabIndex={40}>RESUME</h1></Link>
        <Link href="/services"><h1 tabIndex={40}>SERVICES</h1></Link>
        <Link href="/portfolio"><h1 tabIndex={40}>PORTFOLIO</h1></Link>
        <Link href="/contact"><h1 tabIndex={40}>CONTACT</h1></Link> 
      </div>
  );
}

export default Navbar;
