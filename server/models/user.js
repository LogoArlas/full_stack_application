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

// Create a new user
async function createUserTable(username, password) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO User (username, password) VALUES ($1, $2) RETURNING *',
      [username, password]
    );
    console.log('User created:', result.rows[0]);
    client.release();
    return result.rows[0];
  } catch (err) {
    console.error('Error creating user:', err);
    return null;
  }
}

// Example usage:
//createUser('Jane Smith', 'jane.smith@example.com');