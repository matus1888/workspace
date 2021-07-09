
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '65gasire',
    port: 5432,
})
const getUsers = (request, response) => {
    pool.query('SELECT id,name,avatar FROM users ORDER BY id', (error, results) => {
        if (error) {
            console.log(error)
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
        response.status(201).send({insertedName:name})
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
    pool.query('SELECT * FROM articles ORDER BY id DESC LIMIT 9', (error, results) => {
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
const getArticleByID = (request, response) => {
    const id = Number(request.params.id)
    pool.query('SELECT * FROM articles WHERE id = $1 ORDER BY id', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const createArticle = (request, response) => {
    const heading=String(request.body.heading)
    const userId=String(request.params.id)
    const text=String(request.body.text)
    // console.log(userId,',heading:',heading, ',text:',text)

    pool.query('INSERT INTO articles (heading, userid, body) VALUES ($1, $2, $3)', [heading,  userId, text], (error, results) => {
        if (error) {
            response.status(500).send(error)
            throw error
        }
       response.status(201).send({text:'you added Article:'+text})
    })
}
const updateArticle = (request, response) => {
    const heading=String(request.body.heading)
    const userId=String(request.params.id)
    const text=String(request.body.text)

    pool.query(
        'UPDATE articles SET userid=$2, body=$3 WHERE heading = $1',
        [heading,  userId, text],
        (error, results) => {
            if (error) {
                response.status(500).send(error)
                throw error
            }
            response.status(203).send({text: 'you update article with heading:'+heading+' and text:'+text})
        }
    )
}
const deleteArticle = (request, response) => {
    const heading=String(request.body.heading)
    const userId=String(request.params.id)

    pool.query('DELETE FROM articles WHERE heading = $1 AND userid=$2', [heading, userId], (error, results) => {
        if (error) {
            response.status(500).send(error)
            throw error
        }
        response.status(200).send({text:'you delete article with heading:'+heading})
    })
}
module.exports = {
    getUsers,
    getArticles,
    getArticlesByUserID,
    createArticle,
    updateArticle,
    deleteArticle,
    getArticleByID,
    getUserByName,
    createUser,
    updateUser,
    deleteUser,
}