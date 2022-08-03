import { Layout } from './Layout/Layout';
import { Routes, Route } from 'react-router';
// import { HomeView } from 'views/HomeView';
// import { MoviesPage } from 'views/MoviesPage';
// import { MovieDetailsView } from 'views/MovieDetailsView';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
// import { NotFound } from 'views/NotFound';

import { lazy, Suspense } from 'react';

const HomeViewLazy = lazy(() => import('views/HomeView'));
const MoviesPageLazy = lazy(() => import('views/MoviesPage'));
const MovieDetailsViewLazy = lazy(() => import('views/MovieDetailsView'));
const NotFoundLazy = lazy(() => import('views/NotFound'));
const CastLazy = lazy(() => import('./Cast'));
const ReviewsLazy = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeViewLazy />} />
          <Route path="movies" element={<MoviesPageLazy />} />
          <Route path="movies/:movieId" element={<MovieDetailsViewLazy />}>
            <Route path="cast" element={<CastLazy />} />
            <Route path="reviews" element={<ReviewsLazy />} />
          </Route>
          <Route path="*" element={<NotFoundLazy />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
