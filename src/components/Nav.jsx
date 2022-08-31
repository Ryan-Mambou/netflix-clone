import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import Notification from './Notification';
import User from './User';
import styles from '../styles/nav.module.css';
import { AiFillCaretDown } from "react-icons/ai";
import Tippy from '@tippyjs/react';

function Nav({links}) {
  const [color, setColor] = useState(false)
  const [caret, setCaret] = useState(false)

  const rotateCaret = () => {
    setCaret(!caret)
  }

  const changeColor = () => {
    if (window.scrollY >= 30){
      setColor(true)
    } else { 
      setColor(false)
  }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div className={`${styles.container} ${color ? styles.container_bg : ''}`} >
    <div className={styles.nav}>
        <div className={styles.left}>
            <div className={styles.icon}>NETFLIX</div>
            <div className={styles.links}>
            {links.map((link, index) => (
                <NavLink key={index} to='/' className={styles.link}>{link}</NavLink>
            ))}
            </div>
            <Tippy interactive={true} placement={'bottom'} trigger='click'
            content={
              links.map((link, index) => (
                <div className={styles.links_tippy}>
                <NavLink key={index} to='/' className={styles.link_tippy}>{link}</NavLink>
                </div>
            ))
            }
            >
            <span className={`${styles.mobile_nav}`} onClick={rotateCaret}>
            <span>Parcourir</span>
              < AiFillCaretDown className={`${styles.caret} ${caret ? styles.rotate: ''}`}/>
              </span>
              </Tippy>
        </div>
        <div className={styles.right}>
            <span><Search /></span>
            <span style={{cursor: 'pointer'}}>Jeunesse</span>
            <span><Notification /></span>
            <span><User /></span>
        </div>
    </div>
    </div>
  )
}

export default Nav