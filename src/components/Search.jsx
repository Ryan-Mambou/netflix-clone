import React from 'react'
import { FiSearch } from "react-icons/fi";
import styles from '../styles/search.module.css'

function Search() {
  return (
    <div className={styles.searchDiv}>
    <input placeholder='Titre, personne, genre' className={styles.input}/>
    <FiSearch className={styles.icon}/>
    </div>
  )
}

export default Search