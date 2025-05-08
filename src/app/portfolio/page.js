import React from 'react';
import styles from './portfolio.module.css';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      
      <div className={`${styles.abt}`}>
        <h1>PORTFOLIO</h1>
        <p>Here’s a peek at some of the projects I’ve been working on — enjoy the scroll!</p>
      </div>
       <div className={`${styles.navbar}`}>
       <Link href='/'><h1>HOME</h1></Link>
       <h1>/</h1>
       <h1>PORTFOLIO</h1>
       </div>

    </div>
  );
}

export default page;
