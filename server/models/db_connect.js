require('dotenv').config()
const postgresql = require('pg')

const con = postgresql.createPool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
})

const query = (sql, binding) => {
    return new Promise((resolve, reject) => {
        con.query(sql, binding, (err, result) => {
            if (err) reject(err)
            resolve(result)
        })
    })
}

module.exports = {con, query}