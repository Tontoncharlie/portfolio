import React from 'react';
import styles from './input.module.css';

const Input = () => {
  return (
    <div className={styles.input}>
      <div className={styles.in1}>
        <input className={styles.place} type="text" placeholder="Your Name" />
        <input className={styles.place} type="text" placeholder="Your Email" />
      </div>

      <input className={styles.place} type="text" placeholder="Subject" />
      <textarea className={styles.place} placeholder="Message"></textarea>

      <div className={styles.btnWrapper}>
        <button className={styles.sendBtn}>Send Message</button>
      </div>
    </div>
  );
};

export default Input;
