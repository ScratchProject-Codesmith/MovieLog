const express = require('express');
const path = require('path');
const databaseController = require(path.resolve(
  __dirname,
  '../controllers/databaseController.js'
));
const router = express.Router();
const User = require('../model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//for routes coming to localhost:8080/database

//route to post new user
router.post('/user', databaseController.addUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

//route to post new movie
router.post('/movie', databaseController.addMovie, (req, res) => {
  return res.status(200).json(res.locals.movie);
});

//route to get movies based on user
router.get('/movie');

module.exports = router;
