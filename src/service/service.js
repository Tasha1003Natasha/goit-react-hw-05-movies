import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

const API_KEY = 'fdee5313a0b876498560bfe4baaab806';

export const fetchMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMoviesById = async id => {
  const responseById = await axios.get(
    `movie/${id}?append_to_response=videos&api_key=${API_KEY}`
  );
  return responseById.data;
};
