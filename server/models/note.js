const con = require("./db_connect")

async function createTable() {
    let postgresql = `CREATE TABLE IF NOT EXISTS Note(
    noteId SERIAL PRIMARY KEY,
    text VARCHAR(255),
    CONSTRAINT userFK FOREIGN KEY(userId)
    REFERENCES User(userId)
    )`
    await con.query(postgresql)
}

createTable()