let registrationForm = document.getElementById("registration_form")
if(registrationForm) registrationForm.addEventListener('submit', register)

function register(e) {
    e.preventDefault()
    let fName = getElementById("fname").value
    let lName = getElementById("lname").value
    let uName = getElementById("uname").value
    let passwd = getElementById("passwd").value

    //check if username is at least 1 character
    //check if password is at least 8 characters

    //Use the constructor to declare a new object.
    //This creates a new user.
    const user = new User(fName, lName, uName, passwd)
    console.log(user)

}