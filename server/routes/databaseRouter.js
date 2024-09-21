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
router.post("/login", databaseController.checkForUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});


//post to database/signup
router.post("/signup", databaseController.addUser, async (req, res) => {
  res.status(200).json(res.locals.newUser);
});



//route to post new movie - database/movie
router.post("/movie", databaseController.addMovie, databaseController.PersonMovie, (req, res) => {
  return res.status(200).json(res.locals.movie);
});

//route to get movies based on user

// router.get("/movie");



module.exports = router;
