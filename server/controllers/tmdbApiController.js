const tmdbApiController = {};

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

module.exports = tmdbApiController;