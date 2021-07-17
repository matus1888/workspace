//todo queries for comments and likes
const {pool}= require('./queries')


//comment endpoints
const getComments = (request, response) => {
    const article= Number(request.params.article)
    pool.query(`SELECT * FROM comments WHERE articleID=${article}`, (error, results) => {
        if (error) {
            console.log(error)
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getCommentsMitUsers = (request, response) => {
    const article= Number(request.params.article)
    pool.query(`SELECT * FROM comments,users WHERE comments.articleID=${article} AND comments.userid=users.id `, (error, results) => {
        if (error) {
            console.log(error)
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const createComment = (request, response) => {
    const articleID=Number(request.params.article)
    const userID=Number(request.body.userID)
    const comment=String(request.body.comment)
    pool.query('INSERT INTO comments (userID,articleID,date,comment) VALUES ($1,$2, now(), $3)',[userID, articleID, comment],  (error, results) => {
        if (error) {
            response.status(500).send(error)
            throw error
        }
        response.status(201).send({addedComment:comment})
    })
}
const updateComment = (request, response) => {
    const articleID=String(request.params(article))
    const userID=String(request.body(userID))
    const comment=String(request.body(comment))
    pool.query('UPDATE comments SET comment $1 WHERE articleID=$2, userID=$3 ', [comment,articleID,userID], (error, results) => {
        if (error) {
            console.log(error)
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const deleteComment = (request, response) => {
    const commentID =Number(request.body.commentID)

    pool.query('DELETE FROM comments WHERE id  = $1', [commentID], (error, results) => {
        if (error) {
            response.status(500).send(error)
            throw error
        }
        response.status(200).send({deleteComment:commentID})
    })
}
//likes  endpoints
const getLikes = (request, response) => {
    const articleID=String(request.param(article))
    pool.query('SELECT * FROM likes WHERE articleID=$1', [articleID], (error, results) => {
        if (error) {
            console.log(error)
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports={
    //comments
    getComments,
    getCommentsMitUsers,
    updateComment,
    createComment,
    deleteComment,
    //likes

    getLikes
}