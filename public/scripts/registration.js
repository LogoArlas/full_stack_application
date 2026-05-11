import {User} from "./userObject.js"
import {fetchData} from "./main.js"
let registrationForm = document.getElementById("registration_form")
if(registrationForm) registrationForm.addEventListener('submit', register)

function register(e) {
    e.preventDefault()
    let uName = document.getElementById("uname").value
    let passwd = document.getElementById("passwd").value
    if(passwd) {

    //Use the constructor to declare a new object.
    //This creates a new user.
    const user = new User(uName, passwd)

    console.log(user)

    // make fetch call to register route in server's user.js route file
        fetchData('/user/register', user, 'POST')
        .then(data => {
          if(!data.message) {
            
            window.location = "./note.html"
          }
        })
        .catch(err => {
          let error = document.getElementById("error")
          error.innerText=err.message
          document.getElementById("passwd").value=""
        })
    } else {
        console.log("Invaild Password.")
    }
    
}

function checkPassword() {
    return true;
}