import React from 'react';
import styles from '../styles/movie.module.css';
import img from '../assets/images/thor.jpg';
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineLike } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

function Movie({title, poster}) {
  return (
    <div className={styles.box}>     
        <div className={styles.top}>
            <img src={poster} className={styles.img}/>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottom_top}>
            <div className={styles.reactions}>
              <span className={styles.reaction}><FaPlay /></span>
              <span className={styles.reaction}><AiOutlinePlus /></span>
              <span className={styles.reaction}><AiOutlineLike /></span>
            </div>
            <div className={styles.more}><IoIosArrowDown /></div>
          </div>
          <div className={styles.bottom_bottom}><span>{title}</span></div>
        </div>
    </div>
  )
}

export default Movie