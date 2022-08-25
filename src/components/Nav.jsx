import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import Notification from './Notification';
import User from './User';
import styles from '../styles/nav.module.css'

function Nav({links}) {
  return (
    <div className={styles.container}>
    <div className={styles.nav}>
        <div className={styles.left}>
            <div className={styles.icon}>NETFLIX</div>
            <div className={styles.links}>
            {links.map((link, index) => (
                <NavLink key={index} to='/' className={styles.link}>{link}</NavLink>
            ))}
            </div>
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