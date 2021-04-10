const {Client}=require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '65gasire',
    port: 5432,
})

module.exports= client