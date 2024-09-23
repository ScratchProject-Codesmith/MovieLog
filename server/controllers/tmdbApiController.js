const tmdbApiController = {};

const apiKey = '8b50c39bb07ec0a36ee2e4bbbb238ea1';

tmdbApiController.getConfig = (req, res, next) => {
  const url = 'https://api.themoviedb.org/3/authentication';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjUwYzM5YmIwN2VjMGEzNmVlMmU0YmJiYjIzOGVhMSIsIm5iZiI6MTcyNjg2OTY2MS43MjI5NTksInN1YiI6IjY2ZWRlZDQxNGE3ZjBiMThiMDI1Y2M3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5GFiC7eyxi_68zmFgARgj8mq-2K0ruqGbkx2PdfFArA'
    }
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => res.locals.config = json)
    .then(() => {
      return next();
    })
    .catch(err => {
      next({
        err: 'API Configuration error: Check logs for details.'
      });
    });
};

// Gets a list of all movies that include the value on request
  // Match inupt exactly, but will still get all movies of the exact same name
    // let all movies get pulled in, then ask user to select which one of the list

tmdbApiController.getMovieDetails = (req, res, next) => {
  const { query } = req.params;
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURI(query)}&api_key=${apiKey}`;

  fetch(url)
    .then(res => res.json())
    .then(json => res.locals.moviesWithTitle = json)
    .then(() => {
      return next();
    })
    .catch(err => {
      next({
        err: 'Unable to get movies. Check logs for details.'
      })
    })
};

module.exports = tmdbApiController;

// title
// poster
// overview
// genre ??
// release date