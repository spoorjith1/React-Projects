const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      accept: "application/json"
    }
  });

  const data = await response.json();
  return data.results || [];
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        accept: "application/json"
      }
    }
  );

  const data = await response.json();
  return data.results || [];
};