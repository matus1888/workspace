
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '65gasire',
    port: 5432,
})
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getUserByName = (request, response) => {
    const name = String(request.params.name)
    pool.query('SELECT * FROM users WHERE name = $1', [name], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const createUser = (request, response) => {
    const name=String(request.params.name)
    const pass=String(request.body.password)
    pool.query('INSERT INTO users (name, password) VALUES ($1, $2)', [name,  pass], (error, results) => {
        if (error) {
            response.status(500).send(error)
            throw error
        }
        response.status(201).send({isertedName:name})
    })
}
const updateUser = (request, response) => {
    const name = String(request.params.name)
    const newName= request.body.name

    pool.query(
        'UPDATE users SET name = $1 WHERE name = $2',
        [name, newName],
        (error, results) => {
            if (error) {
                response.status(500).send(error)
                throw error
            }
            response.status(200).send({oldName:name, newName:newName})
        }
    )
}
const deleteUser = (request, response) => {
    const name = String(request.params.name)

    pool.query('DELETE FROM users WHERE name = $1', [name], (error, results) => {
        if (error) {
            response.status(500).send(error)
            throw error
        }
        response.status(200).send({deletedUser:name})
    })
}
module.exports = {
    getUsers,
    getUserByName,
    createUser,
    updateUser,
    deleteUser,
}