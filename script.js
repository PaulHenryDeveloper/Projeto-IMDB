const apiKey = 'YOUR_IMDB_API_KEY';

document.getElementById('search-button').addEventListener('click', function() {
  const movieName = document.getElementById('search-input').value;
  if (movieName) {
    fetch(`https://imdb-api.com/en/API/SearchMovie/${apiKey}/${movieName}`)
      .then(response => response.json())
      .then(data => displayMovies(data.results))
      .catch(error => console.error('Error:', error));
  }
});

function displayMovies(movies) {
  const movieList = document.getElementById('movie-list');
  movieList.innerHTML = '';

  if (movies.length > 0) {
    movies.forEach(movie => {
      const movieItem = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">${movie.description}</p>
            </div>
          </div>
        </div>
      `;
      movieList.innerHTML += movieItem;
    });
  } else {
    movieList.innerHTML = '<p class="text-center text-orange">No movies found</p>';
  }
}
