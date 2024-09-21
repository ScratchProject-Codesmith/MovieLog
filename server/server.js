// Main server file to make requests.

const path = require("path");
const express = require("express");

const app = express();
const PORT = 8080;

const tmdbApiController = require('./controllers/tmdbApiController');

app.use(express.json())

app.get('/', tmdbApiController.getConfig, (req,res)=> {
  console.log(res.locals)
  return res
  .status(200)
  .send({config: res.locals.config})
});


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