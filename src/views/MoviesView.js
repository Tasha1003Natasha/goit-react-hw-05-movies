import { useEffect, useState } from 'react';
import { Moviesgallery } from 'components/Moviesgallery/Moviesgallery';
import { fetchMovies } from 'service/service';

export const MoviesView = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      fetchMovies().then(({ results }) => setMoviesList(results));
    };
    getMovies();
  }, []);

  console.log(moviesList);
  return (
    <>
      <Moviesgallery movies={moviesList} />
    </>
  );
};

// фетч по пошуку
