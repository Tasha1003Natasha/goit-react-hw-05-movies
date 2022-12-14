import { useFetchMoviesById } from 'hooks/useFetchMoviesById';
import {
  Outlet,
  useLocation,
  useNavigate,
  useParams,
  NavLink,
} from 'react-router-dom';
import styles from '../views/views.module.css';

const MovieDetailsView = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const navigate = useNavigate();
  const movie = useFetchMoviesById();

  return (
    <>
      {movie && (
        <div className={styles.menu}>
          <div className={styles.button_list}>
            <button
              type="button"
              onClick={() => navigate(location?.state?.from ?? '/')}
              className={styles.button}
            >
              Go back
            </button>
          </div>
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
          <p className={styles.text}>User Score: {movie.vote_average * 10}%</p>
          <h2 className={styles.title}>Overview</h2>
          <p className={styles.text}>{movie.overview}</p>
          <h2 className={styles.title}>Genres </h2>
          <p className={styles.text}>
            {movie.genres?.map(genres => genres.name).join(' , ')}
          </p>

          <NavLink
            state={{ from: location?.state?.from ?? '/' }}
            to={`/movies/${movieId}/cast`}
          >
            <p className={styles.link}>Cast</p>
          </NavLink>

          <NavLink
            state={{ from: location?.state?.from ?? '/' }}
            to={`/movies/${movieId}/reviews`}
          >
            <p className={styles.link}>Reviews</p>
          </NavLink>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetailsView;
