const express = require("express")
const router = express.Router()
const Note = require("../models/note")

router.get("/getAllNotes", async (req, res) => {
    try{
        const notes = await Note.getAllNotes()
        res.send(notes)
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})

router.post("/getNoteByUserId", async (req, res) => {
    try{
        const userFK = req.body
        console.log(userFK)
        const note = await Note.getNoteByUserId(userFK)
        console.log(note)
        res.send(note)
    } catch (err) {
        res.status(401).send({message: err.message})
    }
})

router.post("/createNote", async (req, res) => {
    try{
        const user = req.body
        console.log(user)
        const note = await Note.createNote(user.userId, user.noteContent) //Change user.text to user.noteContent. Now text column is not undefined in note table
        console.log(note)
        res.send(note)
    } catch (err) {
        res.status(401).send({message: err.message})
    }
})

router.put("/updateNote", async (req, res) => {
    try{
        const update = await Note.updateNote(req.body)
        res.send(update)
    } catch (err) {
        res.status(401).send({message: error.message})
    }
})

router.delete("/deleteNote", async (req, res) => {
    try{
        const note = await Note.deleteNote(req.body)
        res.send(note,'Got a DELETE request at /deleteNote')
    } catch (err) {
        res.status(401).send({message: error.message})
    }
})

module.exports = router