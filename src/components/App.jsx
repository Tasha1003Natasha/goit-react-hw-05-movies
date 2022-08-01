import { Layout } from './Layout/Layout';
import { Routes, Route } from 'react-router';
import { HomeView } from 'views/HomeView';
import { MoviesView } from 'views/MoviesView';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="/movies" element={<MoviesView />}>
          <Route path=":movieId" element={<MovieDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
