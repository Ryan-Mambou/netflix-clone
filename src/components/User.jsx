import React from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import styles from '../styles/user.module.css'

function User() {
  return (
    <div className={styles.container}>
        <div>
            Profile
        </div>
        <AiFillCaretDown className={styles.caret}/>
    </div>
  )
}

export default User