import axios from 'axios';

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDczZThhYTQwZTQ2YjY1YmFkY2NiNTdmYTA4MjhiYyIsInN1YiI6IjY2MmU0MzAwNjlkMjgwMDEyYzQzMTk1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._FK2poFtj1BMre_9ekkQ9jgS9TdO_HlqeaxGwVMCIQ4'
  }
};

export default async function fetchMovies() {
    const response = await axios.get(url, options);
    return response.data.results;
  
}
export const getMovieByName = async (query)  => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
    return response.data.results
}
export const getMovieById = async (movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
    return response.data;
   
  };
// https://api.themoviedb.org/3/movie/940721?language=en-US
// http://localhost:5173/movies/movies/920