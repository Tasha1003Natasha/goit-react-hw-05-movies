import axios from 'axios';

const KEY_API = '7a4cd4317772102a9b88ef6a54b71590';
const BASE_URL = 'https://api.themoviedb.org/3/';
const defaultParams = {
  api_key: KEY_API,
};

const moviesApiClient = axios.create({
  baseURL: BASE_URL,
  params: defaultParams,
});

export const fetchMovies = async () => {
  const { data } = await moviesApiClient.get('/trending/movie/week');
  return data;
};
export const fetchSearchMovies = async query => {
  // console.log(query);
  const { data } = await moviesApiClient.get('/search/movie', {
    params: { query },
  });
  return data;
};

export const fetchMoviesById = async id => {
  const { data } = await moviesApiClient.get(`movie/${id}`);
  return data;
};

export const fetchCastMovies = async id => {
  // console.log(id);
  const { data } = await moviesApiClient.get(`/movie/${id}/credits`);
  return data;
};

export const fetchRewiesMovies = async id => {
  const { data } = await moviesApiClient.get(`
/movie/${id}/reviews`);
  return data;
};
