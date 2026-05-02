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

//register
async function register(user) {
  let cUser = await getUserByUsername(user.username)
  if(cUser) throw Error("Username already in use!")
    try{
      const client = await pool.connect();
      let hashedPassword = await bcrypt.hash(user.password, 10)
      let sql = await client.query(`
      INSERT INTO "User"(username, password) 
      VALUES($1, $2)`[user.username, hashedPassword])
      return await login(user)
      console.log('User registration complete.')
    } catch (err) {
      console.error('Error registering user:', err);
      return null;
    }
  }

//register(user)

//login
  async function login(user) {
    try{
  let cUser = await getUserByUsername(user)
  if(!cUser) throw Error("Username not found!")
  
  let match = await bcrypt.compare(user.password, cUser.password)
  if(!match) throw Error("Password Incorrect!")
  client.release()
  return cUser
  } catch (err) {
  console.error('Error logging in user:', err);
  return null;
      }
}

login('{"hello"}')

// Create a new user
/*async function createUser(username, password) {
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
}*/

//createUser('{"hello"}', '{"1234"}')

//get user by username
async function getUserByUsername(username) {
  try{
    const client = await pool.connect()
    const cUser = await client.query(`SELECT * FROM "User" 
    WHERE username=$1`, [username])
      if (cUser.rows.length > 0) {
      console.log('Got user by username:', cUser.rows[0]);
      client.release();
      return cUser.rows[0];
      } else {
      console.log('User not found');
      client.release();
      return null;
      }
  } catch (err) {
    console.error('Error getting user by username:', err);
    return null;
  }
 
}

getUserByUsername('{"hello"}')

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

//export function
module.exports = {getAllUsers, login, register}

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

//export getAllUsers() function
//module.exports = {getAllUsers}
