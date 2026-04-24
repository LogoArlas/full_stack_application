const pool = require("./db_connect")

// Create a new user
async function createNoteTable(text) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO Note (text) VALUES ($1) RETURNING *',
      [username]
    );
    console.log('Note created:', result.rows[0]);
    client.release();
    return result.rows[0];
  } catch (err) {
    console.error('Error creating note:', err);
    return null;
  }
}

// Get all users
async function getAllNotes() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM Note');
    console.log('All notes:', result.rows);
    client.release();
    return result.rows;
  } catch (err) {
    console.error('Error getting notes:', err);
    return [];
  }
}

// Get a user by ID
async function getNoteById(id) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM Note WHERE id = $1', [id]);
    if (result.rows.length > 0) {
      console.log('Note found:', result.rows[0]);
      client.release();
      return result.rows[0];
    } else {
      console.log('Note not found');
      client.release();
      return null;
    }
  } catch (err) {
    console.error('Error getting Note:', err);
    return null;
  }
}

/*async function createNoteTable() {
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

module.exports = {getAllNotes}*/