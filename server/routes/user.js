const con = require("./db_connect")

async function createTable() {
    let postgresql = `CREATE TABLE IF NOT EXISTS User(
    userId SERIAL PRIMARY KEY,
    username VARCHAR(250) UNIQUE NOT NULL,
    password VARCHAR(250) NOT NULL
    )`
    await con.query(postgresql)
}

createTable()