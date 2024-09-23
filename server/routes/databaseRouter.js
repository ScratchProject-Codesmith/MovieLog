require("dotenv").config();
const express = require("express");
const path = require("path");
const databaseController = require(path.resolve(
  __dirname,
  "../controllers/databaseController.js"
));

const router = express.Router();

//for routes coming to localhost:3000/database/

//route to post database/login
router.post("/login", databaseController.verifyUser, (req, res) => {
  //will be getting request from authslice via credentials on req.body
  return res.status(200).json({
    token: res.locals.jwt,
    user: res.locals.user,
  });
});

//post to database/signup
router.post("/signup", databaseController.addUser, async (req, res) => {
  //will be getting info from authslice via userinfo on req.body
  return res.status(200).json(res.locals.newUser);
});

//route to post new movie - database/movie
router.post(
  "/movie",
  databaseController.addMovie,
  databaseController.PersonMovie,
  (req, res) => {
    //when user clicks correct movie, will add movie to db, and then add to "toWatchList" person movie join talbe
    //will need personID and movieID
    return res.status(200).json(res.locals.movie);
  }
);

//route to get movies based on user
router.post("/movie/list", databaseController.getToWatchList, (req, res) => {
  //will need personID
  return res.status.json(res.locals.toWatchList);
});
//

router.post("/movie/getInfo", databaseController.getMovieInfo, (req, res) => {
  return res.status.json(res.locals.movieInfo);
});

module.exports = router;
