import React from 'react';
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <h1><Image src="/home_images/Tonton.png" width={150} height={50}  alt="pic"/></h1>
      <h2>Thanks for stopping by — let’s create something great!.</h2>
      <div className={`${styles.logos}`}>
        <Image src='/home_images/x_bl.png' width={40} height={40}  alt='logo' className={`${styles.logo}`} />
        <Image src='/home_images/fb_bl.png' width={40} height={40}  alt='logo' className={`${styles.logo}`} />
        <Image src='/home_images/in_bl.png' width={40} height={40}  alt='logo' className={`${styles.logo}`} />
        <Image src='/home_images/ln_bl.png' width={40} height={40}  alt='logo' className={`${styles.logo}`} />
        <Image src='/home_images/gt_bl.png' width={40} height={40}  alt='logo' className={`${styles.logo}`} />
      </div>
      <div className={`${styles.line}`}></div>
      <div style={{ textAlign: 'center'}}>
        <p>Copyright Portfolio All Rights Reserved </p>
        <p>Designed by <span style={{color:'green'}}>Chigioke.C.U.</span> © 2025</p>
      </div>
    </div>
  );
}

export default Footer;
