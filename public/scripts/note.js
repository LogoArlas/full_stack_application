import {Note} from "./noteObject.js"
import {fetchData} from "./main.js"
let noteForm = document.getElementById("note_form")

if(noteForm) noteForm.addEventListener("submit", note)
function note(e) {
    e.preventDefault()
    let noteContent = document.getElementById("note").value

    const note = new Note(noteContent)
    console.log(note)

    // make fetch call to login route in server's note.js route file
    fetchData('/note/createNote', note, 'POST')
    .then(data => {
       console.log(data)
       if(!data.message) {
        
            //let noteText = document.getElementById("noteText")
            noteText.innerTexT=data.message
            //document.getElementById("noteText").value=""
        }
    })
        .catch(err => {
          let error = document.getElementById("error")
          error.innerText=err.message
          document.getElementById("note").value=""
        })
    
    
}