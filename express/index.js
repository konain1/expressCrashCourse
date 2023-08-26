
const express = require('express')
const path = require('path')
const app = express()

console.log(__dirname)

app.get("/",(req,res,next)=>{
    res.send("hello world")
})

app.get('/files',(req,res,next)=>{

    res.sendFile(path.join(__dirname, 'index.html'))

})


app.listen(8080)