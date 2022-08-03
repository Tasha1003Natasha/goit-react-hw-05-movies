import { fetchMoviesById } from 'service/service';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

export const useFetchMoviesById = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  // const [setError] = useState('');
  // const [setLoading] = useState(false);

  useEffect(() => {
    // fetchMoviesById(movieId).then(setMovie);
    const getMovies = async () => {
      try {
        setMovie(await fetchMoviesById(movieId));
      } catch (error) {
        return 'Ooops. Something went wrong...';
      }
    };
    getMovies();
  }, [movieId]);
  // console.log(movie);

  return movie;
};
