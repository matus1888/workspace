//todo queries for comments and likes
const {pool}= require('./queries')

const getComments = (request, response) => {
    const articleID=String(request.param(article))
    pool.query('SELECT * FROM comments WHERE articleID=$1', [articleID], (error, results) => {
        if (error) {
            console.log(error)
            throw error
        }
        response.status(200).json(results.rows)
    })
}
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
    getComments,
    getLikes
}