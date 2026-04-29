require('dotenv').config();
//import Express
const express = require('express');
const db = require("./server/models/db_connect");

//create instance of an Express application
const app = express();

app.use(express.json())

const userRoutes = require("./server/routes/user")

// CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

//define a route path for routes related to the User entity
//const userRoutes = require("./server/routes/user")
app.use("/user", userRoutes)

//define a route path for routes related to the Note entity
const noteRoutes = require("./server/routes/note")
app.use("/note", noteRoutes)

//execute query for GET request
app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM User');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

//set the port the server will run on
const PG_PORT = process.env.PG_PORT || PORT_NUMBER

//start server and listen for incoming requests
app.listen(PG_PORT, ()=> {
 console.log(`Server started on port ${PG_PORT}!!`)

});

/*const pool = require("./server/models/db_connect");

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

main(); */

//execute query for GET request
/*app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM User');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});*/