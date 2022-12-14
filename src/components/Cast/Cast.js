import { fetchCastMovies } from 'service/service';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Cast/Cast.module.css';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getActors = async () => {
      try {
        setLoading(true);
        const { cast } = await fetchCastMovies(movieId);
        setActors(cast);
      } catch (error) {
        setError('Ooops. Something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    getActors();
  }, [movieId]);

  return (
    <>
      {loading && 'Loading...'}
      {error && <div>{error}</div>}
      <ul className={styles.list}>
        {Boolean(actors?.length) &&
          actors.map(element => {
            return (
              <li key={element.id} className={styles.item}>
                <img
                  src={
                    element.profile_path
                      ? `https://image.tmdb.org/t/p/w500${element.profile_path}`
                      : `https://защитныетенты.рф/kernel/preview.php?file=shop/goods/nophoto.jpg&width=400&height=300&method=add`
                  }
                  alt={`${element.title} portrait`}
                  className={styles.img}
                />
                <div>
                  <p className={styles.text}>Name: {element.name}</p>
                  <p className={styles.text}>Character: {element.character}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};
