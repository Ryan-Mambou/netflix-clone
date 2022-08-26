import React, { useEffect, useState } from 'react';
import styles from '../styles/row.module.css';
import Movie from './Movie';

function Row({heading, getMovies}) {
  const [movies, setMovies] = useState([]);
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    
    const fetchMovies = async () => {
      const { data } = await getMovies()
      const { results } = await data;
      console.log(results)
      setMovies(results)
      return results;
    }
      fetchMovies()
    }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column',
    alignItems: 'flex-start', width: 'clamp(80%, 1250px, 95%)'}}>
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.movie_container}>
        {movies?.map(movie => (
          <Movie key={movie.title} poster={`${baseImgUrl}${movie.poster_path}`} title={movie.title} />
        ))}
      </div>
    </div>
  )
}

export default Row