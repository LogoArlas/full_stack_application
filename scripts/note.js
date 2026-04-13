import {Note} from "./noteObject.js"
let noteForm = document.getElementById("note_form")
if(noteForm) noteForm.addEventListener("note_form")
function note(e) {
    e.preventDefault()
    let noteContent = document.getElementById("note")

    const note = new Note(noteContent)
}