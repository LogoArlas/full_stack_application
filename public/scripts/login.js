//login page
import {fetchData} from "./main.js"

let loginForm = document.getElementById("login_form")

//make sure loginForm exists

//add event listener
if(loginForm) loginForm.addEventListener('submit', login)
//take in data from the form and create a new object
function login(e) {
    e.preventDefault()

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if(checkPassword(password)) {
        //create new object
        const user = {     
            username: username,
            password: password
        }
        console.log(user)
        // make fetch call to login route in server's user.js route file
        fetchData('/user/login', user, 'POST')
        .then(data => {
          console.log(data)
          if(!data.message) {
            setCurrentUser(data)
            window.location = "./note.html"
          }
        })
        .catch(err => {
          let error = document.getElementById("error")
          error.innerText=err.message
          document.getElementById("password").value=""
        })
    } else {
        console.log("Invaild Password.")
    }
}

function checkPassword(password) {
    return true
}

async function setCurrentUser(user) {
  await localStorage.setItem('User', JSON.stringify(user))
}

export async function getCurrentUser() {
  return await JSON.parse(localStorage.getItem('User'))
}

export async function removeCurrentUser() {
  localStorage.removeItem('User')
  window.location = "login.html"
}