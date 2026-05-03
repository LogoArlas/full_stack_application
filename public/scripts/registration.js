import {User} from "./user.js"
let registrationForm = document.getElementById("registration_form")
if(registrationForm) registrationForm.addEventListener('submit', register)

function register(e) {
    e.preventDefault()
    let uName = document.getElementById("uname").value
    let passwd = document.getElementById("passwd").value

    //Use the constructor to declare a new object.
    //This creates a new user.
    const user = new User(uName, passwd)
    console.log(user)

}
