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