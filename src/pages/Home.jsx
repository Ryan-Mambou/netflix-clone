import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import styles from '../styles/home.module.css'

function Home() {
  const [movies, setMovies] = useState()

  useEffect(() => {

  }, [])

    const links = [
        'Accueil',
        'Serie',
        'Film',
        'Nouveautes',
        'Ma liste',
        'Explorer par langue'
    ]

  return (
    <div className={styles.body}>
        <Nav links={links}/>
    </div>
  )
}

export default Home