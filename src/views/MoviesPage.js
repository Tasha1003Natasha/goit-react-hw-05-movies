import { useEffect, useState } from 'react';
import { Moviesgallery } from 'components/Moviesgallery/Moviesgallery';
import { Outlet } from 'react-router';
import { fetchSearchMovies } from 'service/service';
import { SearchForm } from 'components/SearchForm/SearchForm';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  // const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = value => {
    setQuery(value);
    // setPage(1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    const getMovies = async () => {
      try {
        setLoading(true);
        const { results } = await fetchSearchMovies(query);
        setMoviesList(results);
      } catch (error) {
        setError('Ooops. Something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [query]);

  return (
    <>
      {loading && 'Loading ...'}
      {error && <div>{error}</div>}
      <SearchForm onSubmit={handleSubmit} />
      <Moviesgallery movies={moviesList} />
      <Outlet />
    </>
  );
};

export default MoviesPage;
