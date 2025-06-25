import React from 'react';
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <h1><Image src="/home_images/Tonton.png" width={150} height={50}  alt="pic"/></h1>
      <h2>Thanks for stopping by — let’s create something great!.</h2>
      <div className={`${styles.logos}`}>
        <a href="https://x.com/Ugobest72212396" target='_blank'><Image src='/home_images/x_bl.png' width={40} height={40}  alt='logo' className={`${styles.logo}`} /></a>
        <a href="https://www.facebook.com/share/19Ry4zqZRe/" target='_blank'><Image src='/home_images/fb_bl.png' width={40} height={40}  alt='logo' className={`${styles.logo}`} /></a>
        <a href="https://www.instagram.com/le_ccu?igsh=eW1mYThmd3N6eTJo" target='_blank'><Image src='/home_images/in_bl.png' width={40} height={40}  alt='logo' className={`${styles.logo}`} /></a>
        <a href="https://www.linkedin.com/in/chigioke-charles-ugochukiou-3196281b7/" target='_blank'><Image src='/home_images/ln_bl.png' width={40} height={40}  alt='logo' className={`${styles.logo}`} /></a>
        <a href="https://github.com/Tontoncharlie" target='_blank'><Image src='/home_images/gt_bl.png' width={40} height={40}  alt='logo' className={`${styles.logo}`} /></a>
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
