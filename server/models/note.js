const pool = require("./db_connect")

async function createNoteTable() {
    let sql = `CREATE TABLE IF NOT EXISTS Note(
    noteId SERIAL PRIMARY KEY,
    text VARCHAR(255),
    CONSTRAINT userFK FOREIGN KEY(userId)
    REFERENCES User(userId)
    )`
    await pool.query(sql)
}

createNoteTable()

//create a function to get all notes
async function getAllNotes() {
    let sql = `
    SELECT * FROM Note;
    `
    return await pool.query(sql)
}

module.exports = {getAllNotes}