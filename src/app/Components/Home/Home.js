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
            <span className={`${styles.slides}`}>Software Engineer</span>
            </div>
        </div>
        <div className={`${styles.logo}`}>
        <h1><Image src='/home_images/x_wh.png' width={20} height={20}  alt='logo'/></h1>
        <h1><Image src='/home_images/fb_wh.png' width={20} height={20}  alt='logo'/></h1>
        <h1><Image src='/home_images/in_wh.png' width={20} height={20}  alt='logo'/></h1>
        <h1><Image src='/home_images/ln_wh.png' width={20} height={20}  alt='logo'/></h1>
        <h1><Image src='/home_images/gt_wh.png' width={20} height={20}  alt='logo'/></h1>
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
