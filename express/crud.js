

const express = require('express')

const app = express();
const path = require('path')



// app.use(express.static('public'))

// read the request.body    all elements
app.use(express.urlencoded({extended:false}))

app.use(express.json())

let books = [
    {id:1,title:'book 1',author:'author 1'},

    {id:2,title:'book 2', author:'author 2'},
    
    {id:3,title:'book 3',author:'author 3'}
]

app.get('/book',(req,res)=>{
   

    res.json(books)
})

app.post('/book',(req,res)=>{

    let data = req.body

    console.log(data)
})

app.listen(8080)