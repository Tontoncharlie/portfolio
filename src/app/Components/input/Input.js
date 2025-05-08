import React from 'react';
import styles from './input.module.css';


const Input = () => {
  return (
    <div className={`${styles.input}`}>

      <div className={`${styles.in1}`}>

      <input style={{height:'40px',color:'white', backgroundColor:'black'}}  className={`${styles.place}`} type="text" placeholder='Your Name'/>

      <input style={{height:'40px',color:'white', backgroundColor:'black'}} className={`${styles.place}`} type="text" placeholder='Your Email' />

      </div>

      
        <input style={{height:'40px',color:'white', backgroundColor:'black'}} className={`${styles.place}`} type="text" placeholder='Subject' />
      
     
       <textarea style={{height:'150px',color:'white', backgroundColor:'black'}} className={`${styles.place}`} placeholder='Message'></textarea>

      <div>
        <button style={{fontWeight:'500', backgroundColor:'green',width:'150px',padding:'10px',borderRadius:'50px',marginLeft:'450px'}}>Send Message</button>
      </div>

    </div>
  );
}

export default Input;
