import {removeCurrentUser, getCurrentUser} from "./login.js"

let cUser = await getCurrentUser()

let nav = document.querySelector('nav')

if (cUser) {
  nav.innerHTML = `
      <ul>
      <li><a href="note.html">Hello, user</a><li>
      <li><a id="logout" href="login.html">Logout</a><li>
      </ul>
      <img src="./images/todo_list_image.jpg" alt="To-Do list picture">`
}

//event listener for logout
let logout = document.getElementById("logout")
if(logout) logout.addEventListener('click', removeCurrentUser)

// fetchData function: use for POST, PUT, and DELETE. 
// Fetch method implementation:
async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3500${route}`, {
    method: methodType, // *POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if (response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
}

export{fetchData}