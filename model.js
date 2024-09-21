const { Pool } = require("pg");
//

const PG_URI =
  "postgresql://postgres.qhwfcjtprybjjybpqvsv:iwicqFdXaLc7IF2I@aws-0-us-west-1.pooler.supabase.com:6543/postgres";

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
  //   ssl: { rejectUnauthorized: false }
});

// console.log('connected to DB')

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};

const db = require("../models/starWarsModels");




const text = 'INSERT INTO person(firstname, lastname, password) VALUES () RETURNING *'
const text = ''




// async function connectAndQuery() {
//   try {
//     // Connect to the database
//     await client.connect();
//     console.log("Connected to the database");

//     // Example query
//     const res = await client.query("SELECT * FROM person");
//     console.log(res.rows); // Display the results
//   } catch (err) {
//     console.error("Error executing query", err);
//   } finally {
//     // Close the connection
//     await client.end();
//   }
// }

// connectAndQuery();
// // //login
// // //post
// // //post
// // //get
