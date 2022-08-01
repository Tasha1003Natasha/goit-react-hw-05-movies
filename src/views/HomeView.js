import { useEffect, useState } from 'react';
import { fetchMovies } from 'service/service';
import { Moviesgallery } from 'components/Moviesgallery/Moviesgallery';

export const HomeView = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      fetchMovies().then(({ results }) => setMoviesList(results));
    };
    getMovies();
  }, []);

  // console.log(moviesList);
  return (
    <>
      <h1>Trending today</h1>
      <Moviesgallery movies={moviesList} />
    </>
  );
};
