import { useFetchMoviesById } from 'hooks/useFetchMoviesById';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from '../views/views.module.css';

export const MovieDetailsView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const movie = useFetchMoviesById();

  return (
    <>
      {movie && (
        <div>
          <button
            type="button"
            onClick={() => navigate(location?.state?.from ?? '/')}
            className={styles.button}
          >
            Go back
          </button>
          <div className={styles.list}>
            <img
              width="400"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png`
              }
              alt={movie.title}
              className={styles.img}
            />
            <h2 className={styles.title}>{movie.title}</h2>
            <p className={styles.text}>
              User Score: {movie.vote_average * 10}%
            </p>
            <h2 className={styles.title}>Overview</h2>
            <p className={styles.text}>{movie.overview}</p>
            <h2 className={styles.title}>Genres </h2>
            <p className={styles.text}>
              {movie.genres.map(genres => genres.name).join(' , ')}
            </p>
          </div>

          <NavLink to="cast">
            <p>Cast</p>
          </NavLink>

          <NavLink to="reviews">
            <p>Reviews</p>
          </NavLink>
          <Outlet />
        </div>
      )}
    </>
  );
};
