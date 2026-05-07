const pool = require("./db_connect")

async function createNoteTable() {
  try {
    const client = await pool.connect();
    let sql = await client.query (`
     
      CREATE TABLE IF NOT EXISTS Note(
          noteId SERIAL PRIMARY KEY,
          userId INT NOT NULL,
          text VARCHAR(255),
          CONSTRAINT userFK FOREIGN KEY(userId)
          REFERENCES "User"(userId)
      );`
    );
      console.log('Note table created:');
      client.release();
     } catch (err) {
      console.error('Error creating Note table:', err);
      return null;
     }

}

createNoteTable()

// Create a new Note
async function createNote(userId, text) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO note (userId, text) VALUES ($1, $2) RETURNING *',
      [userId,text]
    );
    console.log('Note created:', result.rows[0]);
    return result.rows[0];
  } catch (err) {
    console.error('Error creating note:', err);
    return null;
  } finally {
    client.release();
  }
}

// Get all notes
async function getAllNotes() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM note');
    console.log('All notes:', result.rows);
    client.release();
    return result.rows;
  } catch (err) {
    console.error('Error getting notes:', err);
    return [];
  }
}

// getAllNotes()

// Get a note by id
async function getNoteById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM note WHERE noteId = $1', [id]);
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

// Update a note
async function updateNote(id, text) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'UPDATE note SET text = $1 WHERE noteId = $2 RETURNING *',
      [text, id]
    );
    if (result.rows.length > 0) {
      console.log('Note updated:', result.rows[0]);
      client.release();
      return result.rows[0];
    } else {
      console.log('Note not found');
      client.release();
      return null;
    }
  } catch (err) {
    console.error('Error updating note:', err);
    return null;
  }
}

// updateNote()

// Delete a note
async function deleteNote(id) {
  try {
    const client = await pool.connect();
    const result = await client.query('DELETE FROM note WHERE noteId = $1 RETURNING *', [id]);
    if (result.rows.length > 0) {
      console.log('Note deleted:', result.rows[0]);
      client.release();
      return result.rows[0];
    } else {
      console.log('Note not found');
      client.release();
      return null;
    }
  } catch (err) {
    console.error('Error deleting note:', err);
    return null;
  }
}

// deleteNote()

module.exports = {getAllNotes, createNote, updateNote, deleteNote}