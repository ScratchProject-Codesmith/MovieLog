const { Pool } = require("pg");
const bcrypt = require('bcrypt')

// Your Supabase connection string
const connectionString =
  "postgresql://postgres.yxwqzeiplckxvmqyfdch:oiDeEVRbFuQNITA8@aws-0-us-west-1.pooler.supabase.com:6543/postgres";

// Create a new pool using the connection string
const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false, // Supabase requires SSL
  },
});

//function for user creator!, will hash the password, and insert all passed in values to database
//should return the created user which will probably be at like...rows[0] or whatever.
const createUser = async ({ firstName, lastName, username, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const sqlQuery = `
          INSERT INTO users (first_name, last_name, username, hashedPassword)
          VALUES ($1, $2, $3, $4) RETURNING *`
    const values = [firstName, lastName, username, hashedPassword];

    try{
      const result = await pool.query(sqlQuery, values);
      //if we're struggling to find this info, this should at least show us what that user info looks like.//
      console.log('ALL USER INFO!', result.rows[0])
      return result.rows[0]
    } catch (error) {
      throw new Error('OOPS! error creating user:'+ error.message);
    }
};

const findUserByUsername = async (username) => {
  const sqlQuery = `
    SELECT * FROM users where username = $1`;
    const values = [username];

    try {
      const result = await pool.query(sqlQuery, values);
      //Just another check to make sure i'm accessing this right. labels or sql query might need to be changed??//
      console.log('THIS IS THE USER!', result.rows[0])
      return result.rows[0];
    } catch (error) {
      throw new Error('Error finding user: ' + error.message);
    }
};
// // Test the connection
// async function testConnection() {
//   try {
//     const client = await pool.connect();
//     console.log("Connected to the database!");
//     await client.release();
//   } catch (err) {
//     console.error("Error connecting to the database:", err);
//   }
// }

// testConnection();



module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
  createUser,
  findUserByUsername,
};