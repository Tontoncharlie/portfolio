import React from 'react';
import styles from './resume.module.css';
import Link from 'next/link';

const page = () => {
  return (
    <div className={`${styles.resume}`}>
      
      <div className={`${styles.abt}`}>
        <h1>RESUME</h1>
        <p>My journey in a nutshell skills, roles, and what i have learned along the way.</p>
      </div>
      <div className={`${styles.navbar}`}>
       <Link href='/'><h1>HOME</h1></Link>
       <h1>/</h1>
       <h1>RESUME</h1>
       </div>

       <div className={`${styles.hero}`}>
       <div className={`${styles.inhero1}`}>
       <div>
            <h1 style={{fontSize:'30px', fontWeight:'900', padding:'10px'}}>Summary</h1>
            <div className={`${styles.summary}`}>
            <div>
                <div className={`${styles.circle}`}></div>
                <div className={`${styles.line}`}></div>
            </div>
            <div className={`${styles.sum}`}>
                <h1 style={{fontSize:'20px', color:'green'}}>CHIGIOKE CHARLES .U.</h1>
                <h1>With a foundation in Petroleum Engineering, I’ve explored diverse fields  from hands-on experience as a sales rep in an electrical company to building digital solutions through web development and diving into the world of cybersecurity. My journey reflects a passion for learning, adaptability, and a drive to evolve in today’s tech landscape.</h1>
                <p>* 08116373426 / 09060272544</p>
                <p>* ugochukwucharles1418@gmail.com</p>
            </div>
            </div>
        </div>

        <div>
           <h1 style={{fontSize:'30px', fontWeight:'900', padding:'10px', marginTop:'50px'}}>Education</h1>
            <div className={`${styles.summary}`}>
            <div>
                <div className={`${styles.circle}`}></div>
                <div className={`${styles.line}`}></div>
            </div>
            <div className={`${styles.sum}`}>
                <h1 style={{fontSize:'20px', color:'green'}}>BACHELOR DEGREE IN PETROLEUM ENGINEERING</h1>
                <h1>2017 - 2022</h1>
                <p>Federal University of Technology Owerri, Imo State, Nigeria</p>
                <p>Studied the science behind oil and gas production, learned how energy systems work, and built problem-solving and teamwork skills that still shape how I approach challenges today.</p>
            </div>
            </div>
        </div>
       </div>

        <div>
        <div>
        <h1 style={{fontSize:'30px', fontWeight:'900', padding:'10px'}}>Training / Certificates</h1>
            <div className={`${styles.summary}`}>
            <div>
                <div className={`${styles.circle}`}></div>
                <div className={`${styles.line}`}></div>
            </div>
            <div className={`${styles.sum}`}>
                <h1 style={{fontSize:'20px', color:'green'}}>* FULL STACK WEB DEVELOPMENT</h1>
                <h1>2023 - 2024</h1>
                <p>Loctech IT Training Institute, River State, Nigeria</p>
                <p>Trained in building responsive websites and web apps using modern frontend and backend tools  from HTML, CSS,JavaScript and Python to frameworks like React,Node.js and Django.</p>

                <h1 style={{fontSize:'20px', color:'green'}}>* CYBERSECURITY AND ETHICAL HACKING</h1>
                <h1>2023 - 2024</h1>
                <p>Loctech IT Training Institute, River State, Nigeria</p>
                <p>Learned how to protect systems and networks, identify vulnerabilities, and use ethical hacking techniques to improve digital security.</p>
            </div>
            </div>
        </div>

        <div>
        <h1 style={{fontSize:'30px', fontWeight:'900', padding:'10px', marginTop:'50px'}}>Extra Experience</h1>
            <div className={`${styles.summary}`}>
            <div>
                <div className={`${styles.circle}`}></div>
                <div className={`${styles.line}`}></div>
            </div>
            <div className={`${styles.sum}`}>
                <h1 style={{fontSize:'20px', color:'green'}}>* FULL STACK WEB DEV TUTOR</h1>
                <h1>2024 - Presnt</h1>
                <p>LOCTECH IT TRAINING INSTITUTE, Rivers State, Nigeria</p>
                <p>I’m a Full Stack Web Development Tutor dedicated to helping learners master both frontend and backend skills. I teach through hands-on projects, guiding students to build real-world web applications with confidence.</p>
            </div>
            <div className={`${styles.sum}`}>
                <h1 style={{fontSize:'20px', color:'green'}}>* SALES MANAGER</h1>
                <h1>2017 - 2019</h1>
                <p>CJ Chijioke Electrical Company Nig ltd, Imo State, Nigeria</p>
                <p>Handled customer relations, managed product sales, and helped clients find the right electrical solutions — while sharpening my communication and problem-solving skills.</p>
            </div>
            </div>
        </div>
        </div>
       </div>

    </div>
  );
}

export default page;
