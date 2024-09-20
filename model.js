const { Pool } = require("pg");
//

const PG_URI =
  "postgresql://postgres.qhwfcjtprybjjybpqvsv:OwyeCRILE7RujF1B@aws-0-us-west-1.pooler.supabase.com:6543/postgres";

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};

// const { Client } = require("pg");
// const { post } = require("../routes/api");

// // Your Supabase connection string
// const client = new Client({
//   connectionString: "postgresql://username:password@dbhost:5432/database",
//   ssl: { rejectUnauthorized: false }, // Use this option if you're connecting to a remote server with SSL enabled
// });

// async function connectAndQuery() {
//   try {
//     // Connect to the database
//     await client.connect();
//     console.log("Connected to the database");

//     // Example query
//     const res = await client.query("SELECT * FROM your_table_name");
//     console.log(res.rows); // Display the results
//   } catch (err) {
//     console.error("Error executing query", err);
//   } finally {
//     // Close the connection
//     await client.end();
//   }
// }

// connectAndQuery();
// //login
// //post
// //post
// //get
