import { useFetchMoviesById } from 'hooks/useFetchMoviesById';

export const MovieDetails = () => {
  const movie = useFetchMoviesById();
  return movie;
};
