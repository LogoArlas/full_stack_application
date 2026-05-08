import {Note} from "./noteObject.js"
import {fetchData} from "./main.js"
import {getCurrentUser} from "./login.js"
//import {user} from "./registration.js"

let currentUser = getCurrentUser()
if(!currentUser) window.location = "login.html"

//let userFK = user.userId
//console.log(userFK)

let noteForm = document.getElementById("note_form")

if(noteForm) noteForm.addEventListener("submit", note)
function note(e) {
    e.preventDefault()
    let noteContent = document.getElementById("note").value

    const note = new Note(noteContent)
    console.log(note)

    // make fetch call to createNote route in server's note.js route file
    fetchData('/note/createNote', note, 'POST')
    .then(data => {
       console.log(data)
       if(!data.message) {
        let display = document.getElementById("displayContent").innerText=+ data
        }
    })
        .catch(err => {
          let error = document.getElementById("error")
          error.innerText=err.message
          document.getElementById("note").value=""
        })
    
    
}