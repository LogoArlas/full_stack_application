//create route to call getAllUsers() function
const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.get("/getAllUsers", (req, res) => {
    try{
        const users = User.getAllUsers()
        res.send(users)
    } catch (err) {
        res.status(401).send({message: error.message})
    }
})

router.post("/login", (req, res) => {
    try{
        const users = User.login(req.body)
        res.send({...users, password: undefined})
    } catch (err) {
        res.status(401).send({message: error.message})
    }
})

router.post("/register", (req, res) => {
    try{
        const users = User.register(req.body)
        res.send({...users, password: undefined})
    } catch (err) {
        res.status(401).send({message: error.message})
    }
})

router.delete("/deleteUser", (req, res) => {
    try{
        res.send('Got a DELETE request at /deleteUser')
    } catch (err) {
        res.status(401).send({message: error.message})
    }
})


//export the router to access the routes from index.js
module.exports = router