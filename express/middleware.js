const express = require('express')
const path = require('path')
const app = express()
const mor = require('morgan')



let logger = (req,res,next)=>{

    console.log(`${new Date()},  Requrest:[${req.method}] , [${req.url}]`)

    next()
}



// app.use(mor('dev'))

// app.use(mor('common'))
app.use(mor('short'))




app.get('/',(req,res)=>{
    res.send("home")
})

app.get('/about',(req,res)=>{
    res.send("about")
})
app.use(logger)

app.get('/contact',(req,res)=>{
    res.send("contact")
})


// app.listen(8080)