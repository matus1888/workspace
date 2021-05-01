const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const path = require('path');
const optionFUCKING_CORS = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
const app = express();
const db = require('./queries/queries.js')


/*use middleware to main project*/
app.use(cors(optionFUCKING_CORS))
app.use(express.json({extended: true}))
app.use(logger('dev'))


/*adding listeners  of  HTTP Methods in CRUD  metology*/
//this is a HOME PAGE BACKENDS
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/users', db.getUsers)
app.get('/users/:name', db.getUserByName)
app.post('/users/:name', db.createUser)
app.put('/users/:name', db.updateUser)
app.delete('/users/:name', db.deleteUser)
/*API для работы со СТАТЬЯМИ*/
app.get('/articles', db.getArticles)
app.get('/articles/:id', db.getArticlesByUserID)
app.post('/articles/:id', db.createUser)
// app.put('/articles/:id', db.updateUser)
// app.delete('/articles/:id', db.deleteUser)

app.listen(3000)
