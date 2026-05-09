require('dotenv').config();
//import Express
const express = require('express');

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


//set the port the server will run on
const PORT = process.env.PORT || PORT_NUMBER

//start server and listen for incoming requests
app.listen(PORT, ()=> {
 console.log(`Server started on port ${PORT}!!`)

})