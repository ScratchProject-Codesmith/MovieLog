require('dotenv').config()

const express = require('express');
const router = express.Router()
const User = require('./model')///just importing my user model
const jwt = require('jsonwebtoken')// this is the token creator for auth.
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
    const { firstName, LastName, username, password } = req.body;

    try {
        const newUser = await User.createUser({ firstName, lastName, username, password });
        res.status(201).json({
            user: {
                id: newUser.id,
                firstName: newUser.first_name,
                lastName: newUser.last_name,
                username: newUser.username,
            },
        });
    } catch (error) { 
        res.status(400).json({ error: error.message });
    }
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findUserByUsername(username);
        if (!user || !(await bcrypt.compare(password, user.hashed_password))) {
            return res.status(401).json({ error: 'invalid username/password' });
        }

        //this is the token generator....
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h'})//can change this later if we like. 
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'OOPS Login failed:' + error.message });
    }
});
// not setup correctly

// const express = require('express');

// const tmdbApiController = require('../controllers/tmdbApiController');

// const router = express.Router();

// // Config data from api
// router.get('/', tmdbApiController.getConfig, (req,res)=> {
//   console.log(res.locals.config)
//   return res
//   .status(200)
//   .json(res.locals.config)
// });

module.exports = router;

// api access token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjUwYzM5YmIwN2VjMGEzNmVlMmU0YmJiYjIzOGVhMSIsIm5iZiI6MTcyNjg2ODk5My43NDAxODEsInN1YiI6IjY2ZWRlZDQxNGE3ZjBiMThiMDI1Y2M3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PXcXre3VcYUt4uksdEA-U0gSIoa1VHB0v_6KahqmpHc
// api key 8b50c39bb07ec0a36ee2e4bbbb238ea1