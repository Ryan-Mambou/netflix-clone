import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/row.module.css';
import Movie from './Movie';
import { motion } from 'framer-motion'

function Row({heading, getMovies}) {
  const [movies, setMovies] = useState([]);
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';
  const [width, setWidth] = useState(3800);
  const carousel = useRef();

  useEffect(() => {
    
    const fetchMovies = async () => {
      const { data } = await getMovies()
      const { results } = await data;
      console.log(results)
      setMovies(results)
      return results;
    }
    //setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      fetchMovies()
    }, [])

  return (
    <div style={{display: 'flex', flexDirection: 'column',
    alignItems: 'flex-start', width: 'clamp(90%, 1250px, 95%)'}}>
      <motion.h3 className={styles.heading}>{heading}</motion.h3>
      <motion.div className={styles.carousel} ref={carousel}>
      <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className={styles.inner_carousel}>
        {movies?.map(movie => (
          <Movie key={movie.title} poster={`${baseImgUrl}${movie.poster_path}`} title={movie.title} id={movie.title}/>
        ))}
      </motion.div>
      </motion.div>
    </div>
  )
}

export default Row