//import con to access database
const con = require("./db_connect")

//create table in a function
async function createTable() {
    let postgresql = `CREATE TABLE IF NOT EXISTS User(
    userId SERIAL PRIMARY KEY,
    username VARCHAR(250) UNIQUE NOT NULL,
    password VARCHAR(250) NOT NULL)`

//execute the query with con.query
await con.query(postgresql)
}
//call createTable() function
createTable()

//create function to get all users
async function getAllUsers() {
    let postgresql = `
    SELECT * FROM User
    `
    return await con.query(postgresql)
}

//export getAllUsers() function
module.exports = {getAllUsers}