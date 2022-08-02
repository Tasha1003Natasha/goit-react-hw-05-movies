import { useEffect, useState } from 'react';
import { Moviesgallery } from 'components/Moviesgallery/Moviesgallery';
import { Outlet } from 'react-router';
import { fetchSearchMovies } from 'service/service';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const MoviesPage = () => {
  const [query, setQuery] = useState('');
  // const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState([]);

  const handleSubmit = value => {
    setQuery(value);
    // setPage(1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    const getMovies = () => {
      fetchSearchMovies(query).then(({ results }) => setMoviesList(results));
    };
    getMovies();
  }, [query]);

  console.log(moviesList);
  return (
    <>
      <Moviesgallery movies={moviesList} />
      <SearchForm onSubmit={handleSubmit} />
      <Outlet />
    </>
  );
};
