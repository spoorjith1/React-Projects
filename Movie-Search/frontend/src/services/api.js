const API_KEY = "166dd0384c1c80061e2145200af61908";
const BASE_URL = "http://api.themoviedb.org/3"

export const getPopularMovies = async ()=> {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query)=> {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
};