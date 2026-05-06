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

router.post("/createNote", (req, res) => {
    try{
        const note = Note.createNote(req.body)
        res.send(note)
    } catch (err) {
        res.status(401).send({message: error.message})
    }
})

router.post("/updateNote", (req, res) => {
    try{
        const update = Note.updateNote(req.body)
        res.send(update)
    } catch (err) {
        res.status(401).send({message: error.message})
    }
})

router.delete("/deleteNote", (req, res) => {
    try{
        res.send('Got a DELETE request at /deleteNote')
    } catch (err) {
        res.status(401).send({message: error.message})
    }
})

module.exports = router