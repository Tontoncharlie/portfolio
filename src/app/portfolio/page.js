import React from 'react';
import styles from './portfolio.module.css';
import Link from 'next/link';
import EduStream from '../Components/EduStream';
import Inventa from '../Components/Inventa';
import Velocity from '../Components/Velocity';
import Staffly from '../Components/Staffly';

const page = () => {
  return (
    <div>

      <div className={`${styles.abt}`}>
        <h1>PROJECTS</h1>
        <p>Here’s a peek at some of the projects I’ve been working on enjoy the scroll!</p>
      </div>
      <div className={`${styles.navbar}`}>
        <Link href='/'><h1>HOME</h1></Link>
        <h1>/</h1>
        <h1>PROJECTS</h1>
      </div>
      <div className='flex flex-col lg:grid lg:grid-cols-3 gap-3'>
        <Inventa />
        <Velocity/>
        <Staffly/>
        <EduStream />
        
      </div>
    </div>
  );
}

export default page;
