//import pool to access database
const pool = require("./db_connect")
//bcrypt
const bcrypt = require("bcrypt")

async function createUserTable() {
  try{
    const client = await pool.connect();
    let sql = await client.query(
      `
      CREATE TABLE IF NOT EXISTS "User" (
          userId SERIAL PRIMARY KEY,
          username VARCHAR(250) UNIQUE NOT NULL,
          password VARCHAR(250) NOT NULL
      );`
    )
  }catch (err) {
    console.error('Error creating user table:', err);
    return null; 
  }
      
}

createUserTable()

// Create/register a new user
async function createUser(username, password) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO "User" (username, password) VALUES ($1, $2) RETURNING *',
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

createUser('{"hello"}', '{"1234"}')

//get user by username

//login

// Get all users
async function getAllUsers() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM "User"');
    console.log('All users:', result.rows);
    client.release();
    return result.rows;
  } catch (err) {
    console.error('Error getting users:', err);
    return [];
  }
}

getAllUsers()
module.exports = {getAllUsers}

// Get a user by ID
/*async function getUserById(id) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM User WHERE id = $1', [id]);
    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]);
      client.release();
      return result.rows[0];
    } else {
      console.log('User not found');
      client.release();
      return null;
    }
  } catch (err) {
    console.error('Error getting user:', err);
    return null;
  }
}*/

//export functions
//module.exports = {getAllUsers, getUserById}

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
