const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '65gasire',
    port: 5432,
})
pool.query('SELECT NOW()', (err, res) => {
   err? console.log(err): console.log('connection pool is open')
    pool.end()
})
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '65gasire',
    port: 5432,
})
let proverka=()=>{
    client.connect()
    client.query('SELECT * FROM USERS', (err, res) => {
        if(err){
            console.log(err)
        }
        if(res.rows)
        console.log(res.rows)
        client.end()
    })
}
module.exports=proverka
