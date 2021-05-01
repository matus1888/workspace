
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



/*getArticles*/

const getArticles = (request, response) => {
    pool.query('SELECT * FROM articles ORDER BY id', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getArticlesByUserID = (request, response) => {
    const id = Number(request.params.id)
    pool.query('SELECT * FROM articles WHERE userId = $1 ORDER BY id', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const createArticle = (request, response) => {
    const heading=String(request.body.heading)
    const userId=String(request.params.userId)
    const body=String(request.body.body)
    pool.query('INSERT INTO users (heading, userId, body) VALUES ($1, $2, $3)', [heading,  userId, body], (error, results) => {
        if (error) {
            response.status(500).send(error)
            throw error
        }
        response.status(201).send({isertedName:name})
    })
}
// const updateUser = (request, response) => {
//     const name = String(request.params.name)
//     const newName= request.body.name
//
//     pool.query(
//         'UPDATE users SET name = $1 WHERE name = $2',
//         [name, newName],
//         (error, results) => {
//             if (error) {
//                 response.status(500).send(error)
//                 throw error
//             }
//             response.status(200).send({oldName:name, newName:newName})
//         }
//     )
// }
// const deleteUser = (request, response) => {
//     const name = String(request.params.name)
//
//     pool.query('DELETE FROM users WHERE name = $1', [name], (error, results) => {
//         if (error) {
//             response.status(500).send(error)
//             throw error
//         }
//         response.status(200).send({deletedUser:name})
//     })
// }
module.exports = {
    getUsers,
    getArticles,
    getArticlesByUserID,
    createArticle,
    getUserByName,
    createUser,
    updateUser,
    deleteUser,
}