import { fetchMoviesById } from 'service/service';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

export const useFetchMoviesById = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesById(movieId).then(setMovie);
  }, [movieId]);
  // console.log(movie);
  return movie;
};
