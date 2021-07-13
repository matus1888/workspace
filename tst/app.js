const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const fs= require('fs');
const path = require('path');
const isDev=require('./ubuntuDeploy/variantsRun/variant')
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
app.get('/articles', isDev?imitDb.getArticles:db.getArticles)
app.get('/articles/:id', isDev?imitDb.getArticlesByUserID:db.getArticlesByUserID)
app.get('/article/:id', isDev?imitDb.getArticleByID:db.getArticleByID)
app.post('/articles/:id', db.createArticle)
app.put('/articles/:id', db.updateArticle)
app.delete('/articles/:id', db.deleteArticle)
//todo endpoints for comments and likes
// app.get('/comments/:article')
// app.post('/comments/:article')
// app.delete('/comments/:commentID')

// app.get('/likes/:article')
// app.post('/likes/:article')
// app.delete('/likes/:commentID')

app.listen(3000)




//example  of logging my express  application
//     app.use(function(req, res, next) {
//     console.log("Request IP: " + req.url);
//     console.log("Request date: " + new Date());
//     next();
// });
//example  of file sender  of my  express application 'static is directory of  uploads  file's '
// app.use(function(req, res, next) {
//     let filePath = path.join(__dirname, "static", req.url);
//     fs.stat(filePath, function(err, fileInfo) {
//         if (err) {
//             next();
//             return;
//         }
//         if (fileInfo.isFile()) {
//             res.sendFile(filePath);
//         } else {
//             next();
//         }
//     });
// });