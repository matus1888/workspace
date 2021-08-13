const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const path = require('path')
const isDev=require('./ubuntuDeploy/variantsRun/variant')
const dbCL=require('./queries/queriesCommentsAndLikes')
const multer  = require(`multer`);

const upload = multer({dest:"uploads"});


const optionFUCKING_CORS = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
const app = express();
const db = require('./queries/queries.js')
const imitDb = require('./queries/imitDbToDev/imitDb')
/*use middleware to main project*/
app.use(express.static('public'))
app.use(express.static('uploads'))
app.use(cors(optionFUCKING_CORS))
app.use(express.json({extended: true}))
app.use(logger('dev'))


/*adding listeners  of  HTTP Methods in CRUD  metology*/
//this is a HOME PAGE BACKENDS
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/users', isDev?imitDb.getUsers:db.getUsers)
app.get('/users/:name', isDev? imitDb.getUserByName:db.getUserByName)
app.get('/users/:name/:pass', isDev? imitDb.getUserByNameWithPass:db.getUserByNameWithPass)
app.post('/users/:name', isDev?imitDb.createUser:db.createUser)
app.put('/users/:name', db.updateUser)
app.get('/user/:id', isDev?imitDb.getUserById:db.getUserById)
app.delete('/users/:name', db.deleteUser)
/*API для работы со СТАТЬЯМИ*/
app.get('/articles/:page', isDev?imitDb.getArticles:db.getArticles)
app.get('/myArticles/:id', isDev?imitDb.getArticlesByUserID:db.getArticlesByUserID)
app.get('/article/:id', isDev?imitDb.getArticleByID:db.getArticleByID)
app.post('/articles/:id', db.createArticle)
app.put('/articles/:id', db.updateArticle)
app.delete('/articles/:id', db.deleteArticle)
//todo endpoints for comments and likes
app.get('/comments/:article', dbCL.getComments)
app.post('/comments/:article', dbCL.createComment)
app.get('/commentsMitUsers/:article',dbCL.getCommentsMitUsers)
app.put('/comments/:article',dbCL.updateComment)
app.delete('/comments', dbCL.deleteComment)

app.get('/likes/:article',dbCL.getLikes)
app.post('/likes/:article', dbCL.setLike)
app.get('/like/:article/:fromUserID',dbCL.getLike)
app.delete('/likes/:article/:fromUserID/:userID',dbCL.deleteLike)


app.get('/dislikes/:article',dbCL.getDisLikes)
app.post('/dislikes/:article', dbCL.setDisLike)
app.get('/dislike/:article/:fromUserID',dbCL.getDisLike)
app.delete('/dislikes/:article/:fromUserID/:userID',dbCL.deleteDisLike)

app.get('/ips/', dbCL.setIPs)


//file downloader
app.post('/upload', upload.single('avatar'), function (req, res, next) {
    res.status(200).json(req.file.filename)
    next()
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})

app.listen(3000)




