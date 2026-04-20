const pool = require("./db_connect")

async function createTable() {
    let postgresql = `CREATE TABLE IF NOT EXISTS Note(
    noteId SERIAL PRIMARY KEY,
    text VARCHAR(255),
    CONSTRAINT userFK FOREIGN KEY(userId)
    REFERENCES User(userId)
    )`
    await pool.query(postgresql)
}

createTable()

//create a function to get all notes
async function getAllNotes() {
    let postgresql = `
    SELECT * FROM Note
    `
    await pool.query(postgresql)
}

module.exports = {getAllNotes}