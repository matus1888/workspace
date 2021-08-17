//todo queries for comments and likes
const {pool} = require('./queries')


//comment endpoints
const getComments = (request, response) => {
    const article = Number(request.params.article)
    pool.query(`SELECT * FROM comments WHERE articleID=${article}`, (error, results) => {
        if (error) {
            console.log(error)
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getCommentsMitUsers = (request, response) => {
    const article = Number(request.params.article)
    pool.query(`SELECT * FROM comments,users WHERE comments.articleID=${article} AND comments.userid=users.id `, (error, results) => {
        if (error) {
            console.log(error)
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const createComment = (request, response) => {
    const articleID = Number(request.params.article)
    const userID = Number(request.body.userID)
    const comment = String(request.body.comment)
    pool.query('INSERT INTO comments (userID,articleID,date,comment) VALUES ($1,$2, now(), $3)', [userID, articleID, comment], (error, results) => {
        if (error) {
            response.status(200).json({error:"badRequest"})
        }
        response.status(201).send({addedComment: comment})
    })
}
const updateComment = (request, response) => {
    const articleID = String(request.params(article))
    const userID = String(request.body(userID))
    const comment = String(request.body(comment))
    pool.query('UPDATE comments SET comment $1 WHERE articleID=$2, userID=$3 ', [comment, articleID, userID], (error, results) => {
        if (error) {
            console.log(error)
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const deleteComment = (request, response) => {
    const commentID = Number(request.body.commentID)

    pool.query('DELETE FROM comments WHERE id  = $1', [commentID], (error, results) => {
        if (error) {
            response.status(500).send(error)
            throw error
        }
        response.status(200).send({deleteComment: commentID})
    })
}
//likes  endpoints
const getLike = (request, response) => {
    const articleID = Number(request.params.article)||0
    const fromUserID= Number(request.params.fromUserID)||0
    pool.query('SELECT * FROM likes WHERE articleID=$1 AND fromUserID=$2', [articleID, fromUserID], (error, results) => {
        if (error) {
            console.log(error)
            throw error
        }
        if(results.rowCount!==0){
            response.status(200).json({already:true})
        }else{
         response.status(200).json({already:false})
        }
    })
}
const deleteLike=(req,res)=>{
    const articleID = Number(req.params.article)
    const userID = Number(req.params.userID)
    const fromUserID = Number(req.params.fromUserID)
    pool.query('DELETE FROM likes WHERE articleID=$1 AND userID=$2 AND fromUserID=$3', [articleID, userID, fromUserID], (error, results) => {
        if (error) {
            console.log(error)
            throw error
        }
        res.status(200).json({message:"unLike!"})
    })
}
const setLike = (req, res) => {
    const articleID = Number(req.params.article)
    const userID = Number(req.body.userID)
    const fromUserID = Number(req.body.fromUserID)
    pool.query('INSERT INTO likes (articleID, userID, fromUserID) VALUES ($1,$2,$3)', [articleID, userID, fromUserID], (error, results) => {
        if (error) {
            console.log(error)
            throw error
        }
        res.status(200).json({message:"like!"})
    })
}
const getLikes = (request, response) => {
    if (request.params.article==='undefined'){
        response.status(200).json({error: "articleId NaN is not correct"})
    }else {
        const articleID = Number(request.params.article)

        pool.query('SELECT * FROM likes WHERE articleID=$1', [articleID], (error, results) => {
            if (error) {
                console.log(error)
                throw error
            }
            response.status(200).json(results.rowCount)
        })
    }
}





const getDisLike = (request, response) => {
    const articleID = Number(request.params.article)||0
    const fromUserID= Number(request.params.fromUserID)||0
    pool.query('SELECT * FROM dislikes WHERE articleID=$1 AND fromUserID=$2', [articleID, fromUserID], (error, results) => {
        if (error) {
            console.log(error)
            throw error
        }
        if(results.rowCount!==0){
            response.status(200).json({already:true})
        }else{
            response.status(200).json({already:false})
        }
    })
}
const deleteDisLike=(req,res)=>{
    const articleID = Number(req.params.article)
    const userID = Number(req.params.userID)
    const fromUserID = Number(req.params.fromUserID)
    pool.query('DELETE FROM dislikes WHERE articleID=$1 AND userID=$2 AND fromUserID=$3', [articleID, userID, fromUserID], (error, results) => {
        if (error) {
            console.log(error)
            throw error
        }
        res.status(200).json({message:"unLike!"})
    })
}
const setDisLike = (req, res) => {
    const articleID = Number(req.params.article)
    const userID = Number(req.body.userID)
    const fromUserID = Number(req.body.fromUserID)
    pool.query('INSERT INTO dislikes (articleID, userID, fromUserID) VALUES ($1,$2,$3)', [articleID, userID, fromUserID], (error, results) => {
        if (error) {
            console.log(error)
            throw error
        }
        res.status(200).json({message:"like!"})
    })
}
const getDisLikes = (request, response) => {
    if (request.params.article==='undefined'){
        response.status(200).json({error:"NaN is not correct articleId"})}
    else{
        const articleID = Number(request.params.article)
    pool.query('SELECT * FROM dislikes WHERE articleID=$1', [articleID], (error, results) => {
        if (error) {
            console.log(error)
            throw error
        }
        response.status(200).json(results.rowCount)
    })}
}
const setIPs=(req, res)=>{
    const ip=String(req.body.ip)
    console.log(ip)
    pool.query('SELECT * FROM visits WHERE ip=$1',[ip],(error, results)=>{
        if(results.rowCount===0){
            pool.query(`INSERT INTO visits (ip, date) VALUES ($1, now())`,[ip],(error,results)=>{
              if(results) res.status(200).json({ok:true})
            })
        }
    })
}
const getIPs=(req,res)=>{
    pool.query('SELECT * FROM visits',(error,results)=>{
        res.status(200).json(results.rows)
    })
}

module.exports = {
    //comments
    getComments,
    getCommentsMitUsers,
    updateComment,
    createComment,
    deleteComment,
    //likes
    getIPs,
    setIPs,
    setLike,
    getLikes,
    getLike,
    deleteLike,
    //dislikes
    setDisLike,
    getDisLikes,
    getDisLike,
    deleteDisLike


}