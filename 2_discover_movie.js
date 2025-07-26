const needle = require('needle');

const API_KEY = '7e01e046cf02e91ebc781cfcb0d1cc4b';

async function discoverMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`;

  try {
    const response = await needle('get', url);

    if (response.statusCode === 200) {
      const data = response.body;
      console.log(`Found ${data.results.length} Action movies:\n`);
      data.results.forEach((movie, index) => {
        console.log(`${index + 1}. ${movie.title} (Release Date: ${movie.release_date})`);
        console.log(`   Overview: ${movie.overview}`);
        console.log(`   Popularity: ${movie.popularity}`);
        console.log('---');
      });
    } else {
      console.log(`Error: ${response.statusCode}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

discoverMovies();
