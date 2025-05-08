import React from 'react';
import styles from './contact.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Input from '../Components/input/Input';

const page = () => {
  return (
    <div className={`${styles.contact}`}>
      
      <div className={`${styles.abt}`}>
        <h1>CONTACT</h1>
        <p>Got a question or want to collaborate? Feel free to reach out — I’d love to hear from you!</p>
      </div>
       <div className={`${styles.navbar}`}>
       <Link href='/'><h1>HOME</h1></Link>
       <h1>/</h1>
       <h1>CONTACT</h1>
       </div>

       <div className={`${styles.icons}`}>
        <div className={`${styles.icon}`}>
          <Image src="/home_images/location.png" width={60} height={60} style={{backgroundColor:'green',borderRadius:'50px',padding:'10px'}} alt="pic"/>
          <div>
            <h1>Address</h1>
            <p>Psychatric Hospital Road, River state, Nideria</p>
          </div>
        </div>
        <div className={`${styles.icon}`}>
          <Image src="/home_images/call.png" width={60} height={60} style={{backgroundColor:'green',borderRadius:'50px',padding:'10px'}} alt="pic"/>
          <div>
            <h1>Call me</h1>
            <p>+234 8116373426 / +234 9060272544 / +2348165507171
            </p>
          </div>
        </div>
        <div className={`${styles.icon}`}>
          <Image src="/home_images/email.png" width={60} height={60} style={{backgroundColor:'green',borderRadius:'50px',padding:'10px'}} alt="pic"/>
          <div>
            <h1>Email Us</h1>
            <p>ugochukwucharles1418@gmail.com</p>
          </div>
        </div>
        <div className={`${styles.icon}`}>
          <Image src="/home_images/social.png" width={60} height={60} style={{backgroundColor:'green',borderRadius:'50px',padding:'10px'}} alt="pic"/>
          <div>
            <h1>Social Profiles</h1>
            <span className={`${styles.sicon}`}>
                <Image src='/home_images/x_wh.png' width={40} height={40}  alt='logo' className={`${styles.isicon}`}/>
                <Image src='/home_images/fb_wh.png' width={40} height={40}  alt='logo' className={`${styles.isicon}`}/>
                <Image src='/home_images/in_wh.png' width={40} height={40}  alt='logo' className={`${styles.isicon}`}/>
                 <a href="https://www.linkedin.com/in/chigioke-charles-ugochukiou-3196281b7/" target='_blank'>
                 <Image src='/home_images/ln_wh.png' width={40} height={40}  alt='logo' className={`${styles.isicon}`}/>
                 </a>
                <Image src='/home_images/gt_wh.png' width={40} height={40}  alt='logo' className={`${styles.isicon}`}/>
            </span>
          </div>
        </div>
       </div>

       <Input/>

    </div>
  );
}

export default page;
