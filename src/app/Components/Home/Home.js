import React from 'react';
import styles from './home.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <div className={`${styles.hero}`}>
      <div className={`${styles.hero_con}`}>
        <h1>CHIGIOKE CHARLES <br/> UGOCHUKIOU</h1>
        <div className={`${styles.slider_con}`}>
            <div className={`${styles.slider_text}`}>
            <span className={`${styles.slides}`}>Full Stack Web Developer</span>
            <span className={`${styles.slides}`}>Ethical Hacker or Penetration Tester</span>
            </div>
        </div>
        <div className={`${styles.logo}`}>
        <a href="https://x.com/Ugobest72212396" target='_blank'><Image src='/home_images/x_wh.png' width={20} height={20}  alt='logo'/></a>
        <a href="https://www.facebook.com/share/19Ry4zqZRe/" target='_blank'><Image src='/home_images/fb_wh.png' width={20} height={20}  alt='logo'/></a>
        <a href="https://www.instagram.com/le_ccu?igsh=eW1mYThmd3N6eTJo" target='_blank'><Image src='/home_images/in_wh.png' width={20} height={20}  alt='logo'/></a>
        <a href="https://www.linkedin.com/in/chigioke-charles-ugochukiou-3196281b7/" target='_blank'><Image src='/home_images/ln_wh.png' width={20} height={20}  alt='logo'/></a>
        <a href="https://github.com/Tontoncharlie" target='_blank'><Image src='/home_images/gt_wh.png' width={20} height={20}  alt='logo'/></a>
      </div>
      </div>
      <div style={{ marginTop: '30px', maxWidth: '100%' }}>
  <Image
    src="/home_images/pic4.jpg"
    width={350}
    height={150}
    style={{ width: '100%', height: 'auto' }}
    alt="pic"
  />
</div>

      </div>
      
    </div>
  );
}

export default Navbar;
