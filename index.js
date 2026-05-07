require('dotenv').config();
//import Express
const express = require('express');
// const db = require("./server/models/db_connect");
const path = require("path")

//create instance of an Express application
const app = express();
app.use(express.json());

//define route paths for routes related to User and Note entity
const userRoutes = require("./server/routes/user")
const noteRoutes = require("./server/routes/note")

// CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

app.use(express.static(__dirname + "/public"))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/login.html')))

app.use("/user", userRoutes)
app.use("/note", noteRoutes)

//execute query for GET request
//read
/*app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM "User"');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

//POST
//create
app.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await db.query(
      `INSERT INTO "User" (username, password) VALUES ($1, $2) RETURNING *`,
      [username, password]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update
app.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  const result = await db.query(
    `UPDATE "User" SET username = $1 WHERE id = $3 RETURNING *`,
    [username, id]
  );
  res.json(result.rows[0]);
});

// Delete
app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  await db.query(`DELETE FROM "User" WHERE id = $1`, [id]);
  res.json({ message: "User deleted successfully" });
});*/


//set the port the server will run on
const PORT = process.env.PORT || PORT_NUMBER

//start server and listen for incoming requests
app.listen(PORT, ()=> {
 console.log(`Server started on port ${PORT}!!`)

})


/*const pool = require("./server/models/db_connect");*/