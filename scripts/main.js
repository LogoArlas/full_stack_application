//login page

let loginForm = document.getElementById("login_form")

//make sure loginForm exists

//add event listener
loginForm.addEventListener('submit', login)
//take in data from the form and create a new object
function login(e) {
    e.preventDefault()

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if(checkPassword(password)) {
        const user = {
            username: username,
            password: password
        }
        console.log(user)
    } else {
        console.log("Invaild Password.")
    }
}
function checkPassword(password) {
    return true
}