const express = require('express')
const path = require('path')
const app = express()




let logger = (req,res,next)=>{
    console.log(`${new Date()},  Requrest:[${req.method}] , [${req.url}]`)
    next()
}



app.use(logger)

app.get('/home',(req,res)=>{
    res.send("home")
})



app.listen(8080)