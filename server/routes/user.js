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

/*router.post("/getUserId", async (req, res) => {
    try{
        const userId = await User.getUserId()
        res.send(userId)
    } catch (err) {
        res.status(401).send({message: error.message})
    }
})*/

router.post("/login", async (req, res) => {
    try{
        const users = await User.login(req.body)
        console.log(users)
        res.send({...users, password: undefined})
    } catch (err) {
        res.status(401).send({message: error.message})
    }
})

router.post("/register", async (req, res) => {
    try{
        const users = await User.register(req.body)
        console.log(users)
        res.send({...users, password: undefined})
    } catch (err) {
        res.status(401).send({message: error.message})
    }
})

router.delete("/deleteUser", async (req, res) => {
    try{
        const users = await User.deleteUser(req.body)
        res.send(users, 'Got a DELETE request at /deleteUser')
    } catch (err) {
        res.status(401).send({message: error.message})
    }
})


//export the router to access the routes from index.js
module.exports = router