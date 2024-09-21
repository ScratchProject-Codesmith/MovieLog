const { Pool } = require("pg");

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
};