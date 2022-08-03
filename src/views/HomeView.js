import { useEffect, useState } from 'react';
import { fetchMovies } from 'service/service';
import { Moviesgallery } from 'components/Moviesgallery/Moviesgallery';
import styles from '../views/views.module.css';

const HomeView = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetchMovies().then(({ results }) => setMoviesList(results));
    const getMovies = async () => {
      try {
        setLoading(true);
        const { results } = await fetchMovies();
        setMoviesList(results);
      } catch (error) {
        setError('Ooops. Something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  // console.log(moviesList);
  return (
    <>
      {loading && 'Loading ...'}
      {error && <div>{error}</div>}
      <h1 className={styles.title}>Trending today</h1>
      <Moviesgallery movies={moviesList} />
    </>
  );
};

export default HomeView;
