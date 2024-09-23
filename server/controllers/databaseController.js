const db = require("../model.js");
const jwt = require("jsonwebtoken"); // this is the token creator for auth.
const bcrypt = require("bcrypt");

//testing db queries
// const test = async () => {
//   const name = "aitczak";
//   const text = `SELECT * FROM person `;
//   const res = await db.query(text);
//   console.log(res);
// };
// test();

const databaseController = {};

databaseController.addUser = async (req, res, next) => {
  const { firstName, lastName, username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const text = `INSERT INTO person(firstname, lastname, username, password)
                 VALUES($1, $2, $3, $4)
                 RETURNING *`;
  const params = [firstName, lastName, username, hashedPassword];
  try {
    const result = await db.query(text, params);
    console.log("newUserFromDB", result.rows[0]);
    res.locals.newUser = result.rows[0];
    return next();
  } catch (error) {
    return next({
      log: `${error} occurred in databaseController.addUser`,
    });
  }
};

databaseController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  const params = [username];
  const text = `SELECT * FROM person p WHERE
    username = $1`;

  try {
    const user = await db.query(text, params);
    if (!user || !(await bcrypt.compare(password, user.rows[0].password))) {
      return res.status(401).json({ error: "invalid username/password" });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.locals.jwt = token;
    res.locals.user = user.rows[0];
    //or {id: user.id, username: user.username}
    return next();
  } catch (error) {
    return next({
      log: `${error} occurred while verifying user in database`,
    });
  }
};

databaseController.addMovie = async (req, res, next) => {
  //will take the info from API and store in DB
  const { title, overview, release_date, poster_path } = req.body;
  const params1 = [title];

  const text1 = `SELECT * from movie
                  WHERE movie.title = $1`;

  const params2 = [title, overview, release_date, poster_path];
  const text2 = `INSERT INTO movie (title, overview, release_date, poster_path)
                VALUES($1,$2, $3, $4)
                RETURNING *`;

  try {
    const verifyMovie = await db.query(text1, params1);
    if (verifyMovie.rows.length > 0) {
      res.locals.movie_id = verifyMovie.rows[0].id;
      return next();
    }
    const addedMovie = await db.query(text2, params2);
    res.locals.movie_id = addedMovie.rows[0].id;
  } catch (error) {
    return next({
      log: `${error} occurred in databaseControoler.addMovie`,
    });
  }
};

databaseController.PersonMovie = async (req, res, next) => {
  //will take personid from initial req.body and movieid from body after first middleware/addMovie
  const { movie_id, person_username } = req.body;
  const params = [movie_id, person_username];
  const text = `INSERT INTO person_movie (person_id, movie_id) 
                VALUES($1,$2)`;

  try {
    const result = await db.query(text, params);
    // res.locals.movie = result.rows[0].movie_id;
    //already returning movieid on res.locals from previous middleware
    return next();
  } catch (error) {
    return next({
      log: "error occured in PersonMovie middleware ",
    });
  }
};

databaseController.getToWatchList = async (req, res, next) => {
  const { person_id } = req.body;
  const text = `SELECT * FROM movie m
                JOIN person_movie pm ON m.id = pm.movie_id
                WHERE pm.person_id = $1`;
  const params = [person_id];

  try {
    const toWatchList = await db.query(text, params);
    if (toWatchList.rows.length > 0) {
      res.locals.toWatchList = toWatchList;
      return next();
    } else {
      return res.status(404).json({error: `this person has no movies in their watch list`})
    }
  } catch (error) {
    return next({
      log: `${error} occurred in databaseController.getList`,
      status: 500,
      message: {error : `an error occurred while retrieving to watch list`}
    });
  }
};

//add query to get movie info
databaseController.getMovieInfo = async (req, res, next) => {
  const { id } = req.body;

  const text = `SELECT from movie
              WHERE movie.id = $1`;

  const params = [id];

  try {
    const movieInfo = await db.query(text, params);
    if (movieInfo.rows.length === 0){
      return res.status(404).json({error: 'movie not found'})
    }
    res.locals.movieInfo = movieInfo.rows[0]
    return next();
  } catch (error) {
    return next({
      log: `${error} occurred in databaseController getMovieInfo middleware`,
    });
  }
};


//could add delete operation on movieList - delete * person_movie pm where person_id = 1 and movie_id = 2 

module.exports = databaseController;
