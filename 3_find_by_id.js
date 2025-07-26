const needle = require('needle');

const API_KEY = '7e01e046cf02e91ebc781cfcb0d1cc4b'; 

async function getMovieById(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  try {
    const response = await needle('get', url);

    if (response.statusCode === 200) {
      const movie = response.body;
      console.log(`Title: ${movie.title}`);
      console.log(`Release Date: ${movie.release_date}`);
      console.log(`Overview: ${movie.overview}`);
      console.log(`Genres: ${movie.genres.map(genre => genre.name).join(', ')}`);
      console.log(`Cast: ${movie.cast ? movie.cast.map(c => c.name).join(', ') : 'N/A'}`);
      console.log(`Runtime: ${movie.runtime} minutes`);
      console.log(`Vote Average: ${movie.vote_average}`);
      console.log(`Poster: https://image.tmdb.org/t/p/w500${movie.poster_path}`);
    } else {
      console.log(`Error: ${response.statusCode}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const movieId = 550; 
getMovieById(movieId);
