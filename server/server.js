// Main server file to make requests.

const path = require("path");
const express = require("express");

const app = express();
const PORT = 8080;

const tmdbApiController = require('./controllers/tmdbApiController');
const databaseRouter = require("./routes/databaseRouter");

app.use(express.json())

app.get('/', tmdbApiController.getConfig, (req,res)=> {
  console.log(req)
  return res
  .status(200)
  .send({config: res.locals.config})
});

app.get('/movies', tmdbApiController.getMovieDetails, (req,res)=> {
  console.log(res.locals.moviesWithTitle)
  return res
  .status(200)
  .json({moviesWithTitle: res.locals.moviesWithTitle})
});


app.use('/database', databaseRouter);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  
  const errorObj = Object.assign({}, defaultErr, err);
  console.error(errorObj.log);
  res.status(errorObj.status).json("error" + errorObj.message);
  
  return next(errorObj);
  
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app; 