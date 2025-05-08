import React from 'react';
import styles from './services.module.css';
import Link from 'next/link';
import Image from 'next/image';

const page = () => {
  return (
    <div>
            <div className={`${styles.abt}`}>
              <h1>SERVICES</h1>
              <p>Looking for help with your next project? Here’s what I can do for you!</p>
            </div>
            <div className={`${styles.navbar}`}>
             <Link href='/'><h1>HOME</h1></Link>
             <h1>/</h1>
             <h1>SERVICES</h1>
             </div>

        <div className={`${styles.hero}`}>
            <div className={`${styles.inhero}`}>
                <Image src="/home_images/tools.png" width={100} height={100} alt="icon"/>
                <h1>Web Development</h1>
                <p>Designing and building responsive, user-friendly websites using modern tools like React, Next.js, and Node.js.</p>
            </div>
            <div className={`${styles.inhero}`}>
                <Image src="/home_images/paint.png" width={100} height={100} alt="icon"/>
                <h1>Frontend Development</h1>
                <p>Creating clean, interactive, and accessible interfaces that look great on all devices.</p>
            </div>
            <div className={`${styles.inhero}`}>
                <Image src="/home_images/tool.png" width={100} height={100} alt="icon"/>
                <h1>Backend Development</h1>
                <p>Developing secure, scalable server-side applications with efficient database management.</p>
            </div>
            <div className={`${styles.inhero}`}>
                <Image src="/home_images/lock.png" width={100} height={100} alt="icon"/>
                <h1>Cybersecurity Basics</h1>
                <p>Helping individuals and small businesses understand digital safety, identify risks, and secure their online presence.</p>
            </div>
            <div className={`${styles.inhero}`}>
                <Image src="/home_images/lab.png" width={100} height={100} alt="icon"/>
                <h1>Website Testing and Debugging</h1>
                <p>Finding and fixing bugs, optimizing performance, and ensuring a smooth user experience.</p>
            </div>
            <div className={`${styles.inhero}`}>
                <Image src="/home_images/bulb.png" width={100} height={100} alt="icon"/>
                <h1>Technical Support</h1>
                <p>Providing help with website setup, small edits, or general tech troubleshooting.</p>
            </div>
        </div>

    </div>
  );
}

export default page;
