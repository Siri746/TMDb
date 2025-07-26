const needle = require('needle');

// Replace this with your TMDb API key
const API_KEY = '7e01e046cf02e91ebc781cfcb0d1cc4b';

async function searchMovies(query) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US`;

  try {
    const response = await needle('get', url);

    if (response.statusCode === 200) {
      const data = response.body;

      if (data.results.length === 0) {
        console.log('No movies found for your search query.');
      } else {
        console.log(`Found ${data.results.length} movie(s):\n`);
        data.results.forEach((movie, index) => {
          console.log(`${index + 1}. ${movie.title}`);
          console.log(`   Release Date: ${movie.release_date}`);
          console.log(`   Overview: ${movie.overview}`);
          console.log(`   Popularity: ${movie.popularity}`);
          console.log('---');
        });
      }
    } else {
      throw new Error(`API request failed with status code: ${response.statusCode}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const movieQuery = 'Inception'; 
searchMovies(movieQuery);
