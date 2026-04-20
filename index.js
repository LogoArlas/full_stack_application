require('dotenv').config();
//import Express
const express = require("express")
//create instance of an Express application
const app = express()

//define a route path for routes related to the User entity
const userRoutes = require("./server/routes/user")
app.use("/users", userRoutes)

app.use(express.json())

//set the port the server will run on
const PORT = process.env.PORT ||
//start server and listen for incoming requests
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}!!`))