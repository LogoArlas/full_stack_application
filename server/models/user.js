//import pool to access database
const pool = require("./db_connect")

/*//create function to create table 
async function createUserTable() {
    let sql = `CREATE TABLE IF NOT EXISTS User(
    userId SERIAL PRIMARY KEY,
    username VARCHAR(250) UNIQUE NOT NULL,
    password VARCHAR(250) NOT NULL)`

//execute the query with pool.query
await pool.query(sql)
}
//call createTable() function
createUserTable()

//create function to get all users
async function getAllUsers() {
    let sql = `
    SELECT * FROM User;
    `
    return await pool.query(sql)
}

//export getAllUsers() function
module.exports = {getAllUsers}*/