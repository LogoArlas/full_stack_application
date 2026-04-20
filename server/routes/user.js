const con = require("./db_connect")

async function createTable() {
    let postgresql = `CREATE TABLE IF NOT EXISTS User(
    userId SERIAL PRIMARY KEY,
    username VARCHAR(250) UNIQUE NOT NULL,
    password VARCHAR(250) NOT NULL
    )`
    await con.query(postgresql)
}

createTable()

//create route to call getAllUsers() function
const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.get("/", (req, res) => {
    try{
        const users = User.getUsers()
        res.send(users)
    } catch (err) {
        res.status(401).send({message: error.message})
    }
})

//export the router to access the routes from index.js
module.exports = router