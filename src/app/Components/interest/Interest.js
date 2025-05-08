import React from 'react';
import styles from './interest.module.css';
import Image from 'next/image';

const Interest = () => {
  return (
    <div>
      <div className={`${styles.int}`}>
        <div style={{width:'300px',height:'100px', backgroundColor:'#333333', justifyContent:'center', alignContent:'center',padding:'0 20px',border:'2px solid green'}}>
        <Image src="/home_images/book.png" width={50} height={50} alt="icon"/>
        <h1>Reading</h1>
        </div>
        <div style={{width:'300px',height:'100px', backgroundColor:'#333333', justifyContent:'center', alignContent:'center',padding:'0 20px',border:'2px solid green'}}>
        <Image src="/home_images/headphones.png" width={50} height={50} alt="icon"/>
        <h1>Music</h1>
        </div>
        <div style={{width:'300px',height:'100px', backgroundColor:'#333333', justifyContent:'center', alignContent:'center',padding:'0 20px',border:'2px solid green'}}>
        <Image src="/home_images/leaf.png" width={50} height={50} alt="icon"/>
        <h1>Nature Walks</h1>
        </div>
        <div style={{width:'300px',height:'100px', backgroundColor:'#333333', justifyContent:'center', alignContent:'center',padding:'0 20px',border:'2px solid green'}}>
        <Image src="/home_images/planet.png" width={50} height={50} alt="icon"/>
        <h1>Cultural Exploration</h1>
        </div>
        <div style={{width:'300px',height:'100px', backgroundColor:'#333333', justifyContent:'center', alignContent:'center',padding:'0 20px',border:'2px solid green'}}>
        <Image src="/home_images/popcorn.png" width={50} height={50} alt="icon"/>
        <h1>Watching Anime & Movies</h1>
        </div>
        <div style={{width:'300px',height:'100px', backgroundColor:'#333333', justifyContent:'center', alignContent:'center',padding:'0 20px',border:'2px solid green'}}>
        <Image src="/home_images/meditation.png" width={50} height={50} alt="icon"/>
        <h1>Meditation</h1>
        </div>
      </div>

    </div>
  );
}

export default Interest;
