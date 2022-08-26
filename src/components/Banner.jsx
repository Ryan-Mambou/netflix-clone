import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import styles from '../styles/banner.module.css';
import { getPopular } from '../services/movieService';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

function Banner({links}) {
  const [movies, setMovies] = useState()
  const [movie, setMovie] = useState([])
  const { backdrop_path: image } = movie;
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';

  console.log(movies)

  useEffect(() => {
    
  const fetchMovies = async () => {
    const { data } = await getPopular()
    const { results } = await data;
    //setMovies(results)  
    console.log(results)
    setMovie(results[Math.floor(Math.random() * results.length)])
    return results;
  }

    fetchMovies()
  }, [])

  return (
    <div className={styles.body} style={{background: `url(${baseImgUrl}${image})`}}>
        <Nav links={links}/>
        <div className={styles.banner_content}>
          <div className={styles.banner_text}>
            <h2 className={styles.title}>{movie.title}</h2>
            <p className={styles.overview}>{movie.overview}</p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button_lecture}><FaPlay /> {' '}Lecture</button>
            <button className={styles.button_info}><AiOutlineInfoCircle /> {' '}Plus d'infos</button>
          </div>
        </div>
    </div>
  )
}

export default Banner