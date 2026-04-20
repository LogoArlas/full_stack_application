require('dotenv').config()

/*const con = sql.createPool({
    
})

const query = (sql, binding) => {
    return new Promise((resolve, reject) => {
        con.query(sql, binding, (err, result) => {
            if (err) reject(err)
            resolve(result)
        })
    })
}

module.exports = {con, query}*/
const {Pool} = require('pg')

const pool = new Pool ({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE
})

const query = (postgresql, binding) => {
    return new Promise((resolve, reject) => {
        pool.query(postgresql, binding, (err, result) => {
            if (err) reject(err)
            resolve(result)
        })
    })
}

module.exports = {pool, query}
//query: (text, params) => pool.query(text, params)}
/*pool.query('SELECT NOW', (err, res) => {
    if(err) {
        console.error(err)
    } else {
        console.log(res.rows[0])
    }
    pool.end()
})*/

//module.exports = pool