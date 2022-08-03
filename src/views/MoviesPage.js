import { useEffect, useState } from 'react';
import { Moviesgallery } from 'components/Moviesgallery/Moviesgallery';
import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'service/service';
import { SearchForm } from 'components/SearchForm/SearchForm';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  // const [query, setQuery] = useState('');
  // const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = value => {
    // setQuery(value);
    setSearchParams({ query: value });
    // setPage(1);
  };

  useEffect(() => {
    if (!query) {
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
