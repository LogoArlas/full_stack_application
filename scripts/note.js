import {Note} from "./noteObject.js"
let noteForm = document.getElementById("note_form")

if(noteForm) noteForm.addEventListener("submit", note)
function note(e) {
    e.preventDefault()
    let noteContent = document.getElementById("note").value

    const note = new Note(noteContent)
    console.log(note)
}