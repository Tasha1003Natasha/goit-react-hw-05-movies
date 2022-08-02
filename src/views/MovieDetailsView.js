import { useFetchMoviesById } from 'hooks/useFetchMoviesById';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MovieDetailsView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const movie = useFetchMoviesById();

  return (
    <>
      {movie && (
        <>
          <button
            type="button"
            onClick={() => navigate(location?.state?.from ?? '/')}
          >
            Go back
          </button>
          <img
            width="400"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>User Score: {movie.vote_average * 10}%</p>
          <div className="movie_overview">
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </div>
          <div className="movie_genre">
            <h2>Genres </h2>
            <p>{movie.genres.map(genres => genres.name).join(' , ')}</p>
          </div>

          <Link to="cast">
            <p>Cast</p>
          </Link>
          <Outlet />
        </>
      )}
    </>
  );
};
