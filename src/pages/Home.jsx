import Banner from '../components/Banner';
import Row from '../components/Row';
import styles from '../styles/home.module.css';
import { getPopular, getLatest, getTopRated, getUpcoming } from '../services/movieService';

function Home() {

    const links = [
        'Accueil',
        'Serie',
        'Film',
        'Nouveautes',
        'Ma liste',
        'Explorer par langue'
    ]    

  return (
    <>
   <Banner links={links}/>
   <div className={styles.row_wrapper}>
    <Row heading='Populaire sur Netflix' getMovies={getPopular}/>
    <Row heading='Les mieux notés' getMovies={getTopRated}/>
    <Row heading='Les plus recents' getMovies={getLatest}/>
    <Row heading='A venir...' getMovies={getUpcoming}/>
   </div>
   </>
  )
}

export default Home