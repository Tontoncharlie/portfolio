import React from 'react';
import styles from './about.module.css'
import Link from 'next/link';
import Image from 'next/image';
import Skills from '../Components/skills/Skills';
import Interest from '../Components/interest/Interest';

const page = () => {
  return (
    <div>
     
      <div className={`${styles.abt}`}>
        <h1>ABOUT</h1>
        <p>Hey! Want to know more about me? Let’s dive in.</p>
      </div>
       <div className={`${styles.navbar}`}>
       <Link href='/'><h1>HOME</h1></Link>
       <h1>/</h1>
       <h1>ABOUT</h1>
       </div>
       <div className={`${styles.hero}`}>
        <div>
          <h1><Image src='/home_images/pic7.jpg' width={600} height={600} style={{marginTop:'80px'}} alt='pic'/></h1>
        </div>
       <div className={`${styles.inhero}`}>
        <h1 style={{fontWeight:'bolder', fontSize:'30px'}}>Full Stack Web Developer/ <span style={{color:'green'}}>Software Engineer</span>.</h1>
        <p>Hey there! I'm a full stack web developer who loves turning ideas into clean, responsive, and user-friendly digital experiences.<br/> Whether it’s designing a sleek frontend or building a solid backend, I enjoy the challenge of bringing projects to life.<br/> I believe good code tells a story and I’m here to write it by solving real problems with simple solutions and learning something new every day.</p>
       
        <div className={`${styles.info}`}>
      {/* <div style={{display:'flex', gap:'10px'}}>
      <Image src="/home_images/right.png" width={20} height={30} alt="pic"/>
      <h1>Birthday: 18 November 1998</h1>
      </div> */}
      <div style={{display:'flex', gap:'10px',alignItems:'flex-start'}}>
      <Image src="/home_images/right.png" width={20} height={30} alt="pic"/>
      <h1>Languages: English / French / Basic Spanish(actively studying)</h1>
      </div>
      <div style={{display:'flex', alignItems: 'flex-start', gap:'10px'}}>
      <Image src="/home_images/right.png" width={20} height={30} alt="pic"/>
      <h1>Phone: +234 8116373426 / +234 8165507171/ +234 9060272544</h1>
      </div>
      <div style={{display:'flex', alignItems: 'flex-start', gap:'10px'}}>
      <Image src="/home_images/right.png" width={20} height={30} alt="pic"/>
      <h1>Email: ugochukwucharles1418@gmail.com</h1>
      </div>
      <div style={{display:'flex', gap:'10px'}}>
      <Image src="/home_images/right.png" width={20} height={30} alt="pic"/>
      <h1>City: Port-harcout, Nigeria</h1>
      </div>
      <div style={{display:'flex', gap:'10px'}}>
      <Image src="/home_images/right.png" width={20} height={30} alt="pic"/>
      <h1>Freelance: Available</h1>
      </div>
      </div>
       </div>
       </div>

       <div className={`${styles.hero2}`}>
        <div className={`${styles.inhero2}`}>
        <h1>SKILLS</h1>
        <p>My Skills</p>
        </div>
      <Skills/>
       </div>
       <div className={`${styles.hero3}`}>
       <div className={`${styles.inhero3}`}>
        <h1>FEATURES</h1>
        <p>I'M INTERSTED IN</p>
        </div>
       <Interest/>
       </div>
    </div>
  );
}

export default page;
