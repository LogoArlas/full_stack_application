require('dotenv').config();
//import Express
const express = require("express")
//create instance of an Express application
const app = express()

app.use(express.json())

//set the port the server will run on
const PORT = process.env.PORT ||
//start server and listen for incoming requests
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}!!`))