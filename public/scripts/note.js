import {Note} from "./noteObject.js"
import {fetchData} from "./main.js"
import {getCurrentUser} from "./login.js"

let currentUser = await getCurrentUser()
if(!currentUser) window.location = "login.html"

let userFK = currentUser.userid
let jUserFK = userFK

console.log(currentUser)
console.log(userFK)
console.log(typeof jUserFK)

const keyId = {
  userId: jUserFK
}

console.log(typeof keyId)

//print all instances of note
document.addEventListener('DOMContentLoaded', function(e) {
displayAllNotes(e)
e.preventDefault()
})

function displayAllNotes(e) {
  e.preventDefault()

  fetchData('/note/getNoteByUserId', keyId, 'POST')
   .then(data => {     
    console.log(data)
      displayNotes(data)
      console.log(data)
})
        .catch(err => {
          let error = document.getElementById("error")
          error.innerText=err.message
          document.getElementById("displayIdNotes").value=""
        })
         
}

function displayNotes(data) {
    const dataContainer = document.getElementById("displayIdNotes");
    
    // Clear existing data
    dataContainer.innerHTML = '';

    data.forEach(item => {
      const dataItem = document.createElement('div');
        dataItem.classList.add('data-item');
        dataItem.textContent = `NoteId: ${item.noteid}, UserId: ${item.userid}, Content : ${item.text}`;
        dataContainer.appendChild(dataItem);
    })
}
         
let noteForm = document.getElementById("note_form")

if(noteForm) noteForm.addEventListener("submit", note)
function note(e) {
    e.preventDefault()
    let noteContent = document.getElementById("note").value

    const note = new Note(userFK, noteContent)
    console.log(note)

    // make fetch call to createNote route in server's note.js route file
    fetchData('/note/createNote', note, 'POST')
    .then(data => {
       console.log(data)
       if(!data.message) {
        let display = document.getElementById("displayContent")
        display.innerText=data.text
        document.getElementById("note").value=""
        displayAllNotes(e)
        }
    })
        .catch(err => {
          let error = document.getElementById("error")
          error.innerText=err.message
          document.getElementById("note").value=""
        })
    
    
}