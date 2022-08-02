import { Layout } from './Layout/Layout';
import { Routes, Route } from 'react-router';
import { HomeView } from 'views/HomeView';
import { MoviesPage } from 'views/MoviesPage';
import { MovieDetailsView } from 'views/MovieDetailsView';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { NotFound } from 'views/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsView />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
