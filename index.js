require('dotenv').config();
//import Express
const express = require("express")
//create instance of an Express application
const app = express()

//define a route path for routes related to the User entity
//const userRoutes = require("./server/routes/user")
//app.use("/users", userRoutes)

//app.use(express.json())

//define a route path for routes related to the Note entity
//const noteRoutes = require("./server/routes/note")
//app.use("/notes", noteRoutes)

//set the port the server will run on
const PG_PORT = process.env.PG_PORT || PORT_NUMBER
//start server and listen for incoming requests
app.listen(PG_PORT, ()=> console.log(`Server started on port ${PG_PORT}!!`))

// index.js
const pool = require("./server/models/db_connect");

async function main() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    console.log('Current time from PostgreSQL:', result.rows[0].now);
    client.release(); // Release the connection back to the pool
  } catch (err) {
    console.error('Error executing query', err);
  } finally {
    // Ensures that the pool will be shutdown gracefully
    await pool.end();
  }
}

main();

//define a route path for routes related to the User entity
const userRoutes = require("./server/routes/user")
app.use("/users", userRoutes)

app.use(express.json())