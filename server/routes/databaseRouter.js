const express = require("express");
const databaseController = require('../controllers/databaseControoler.js');
const router = express.Router();

//for routes coming to localhost:8080/database


//route to post new user
router.post('/user', databaseController.addUser, (req,res)=>{
    return res.status(200).json(res.locals.user)
})



//route to post new movie 
router.post('/movie', databaseController.addMovie, (req,res)=>{
    return res.status(200).json(res.locals.movie)
})


//route to get movies based on user
router.get('/movie')