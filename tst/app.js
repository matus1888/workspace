const fs=require('fs/promises')
const express= require('express')
const logger=require('morgan')
const cors=require('cors')

const app= express();
/*Непонятно как и почему это работает,  но юбез него оно не работает вообще(body is undefined)*/
app.use(express.json({extended:true}))
/*подключение HTTP  логгера для приложения*/
app.use(logger('dev'))
app.get('/', (req, res)=>{
    res.send('hello world!!!!')
})
app.get('/addInBase',(req, res)=>{
    fs.appendFile("./isMyDataBase.txt", "\n"+" time:  "+ new Date()).catch(()=>{
        console.log("что то пошло не так ")
    })
    console.log(this, new Date(), 'произведена новая запись в файл')
    res.send('added')
})
app.post('/add',function(req, res){
    console.log(req.body)
})
 let options={
     origin: '*',
     optionsSuccessStatus: 200
 }
app.use(cors(options))
app.listen(3000)
