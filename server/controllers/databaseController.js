const db = require("../model.js");
const jwt = require("jsonwebtoken"); // this is the token creator for auth.
const bcrypt = require("bcrypt");

const databaseController = {};

databaseController.addUser = async (req, res, next) => {
  const { firstname, lastname, username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const text = `INSERT INTO person(firstname, lastname, username, password)
                 VALUES($1, $2, $3, $4)
                 RETURNING *`;
  const params = [firstname, lastname, username, hashedPassword];
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

databaseController.checkForUser = async (req, res, next) => {
  const { username, password } = req.body;
  const params = [username, password];
  const text = `SELECT * FROM person p WHERE
    username = $1 AND password = $2`;

  try {
    const user = await db.query(text, params);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "invalid username/password" });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.locals.jwt = token;
    return next();
  } catch (error) {
    return next({
      log: `${error} occurred while checking database for user information`,
    });
  }
};

databaseController.addMovie = async (req, res, next) => {
  //will take the info from API and store in DB
  const { title, overview, release_date, poster_path } = req.body;
  const params = [title, overview, release_date, poster_path];
  const text = `INSERT INTO movie (title, overview, release_date, poster_path)
                VALUES($1,$2, $3, $4)
                RETURNING *`;

  try {
    const movie = await db.query(text, params);
    res.locals.movie_id = movie._id;
    return next();
  } catch (error) {
    return next({
      log: `${error} occurred in databaseControoler.addMovie`,
    });
  }
};

databaseController.PersonMovie = async (req, res, next) => {
  //will take personid from initial req.body and movieid from body after first middleware/addMovie
  const { movie_id, person_id } = req.body;
  const params = [movie_id, person_id];
  const text = `INSERT INTO person_movie (person_id, movie_id) 
                VALUES($1,$2)`;

  try {
    const result = await db.query(text, params);
    res.locals.personMovie = result;
    return next();
  } catch (error) {
    return next({
      log: "error occured in PersonMovie middleware ",
    });
  }
};

// databaseController.getList = async (req,res,next)=>{
//     const {person_id} = req.body ?
//     //or need to take person first and last name, perform read operation to get person_id from database
//     //then do inner join? to
// }

module.exports = databaseController;
