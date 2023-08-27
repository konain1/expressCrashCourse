

const express = require('express')

const app = express();
const path = require('path')


app.use(express.static('public'))

// read the request.body    all elements
app.use(express.urlencoded({extended:false}))

let books = [
    {id:1,title:'book 1',author:'author 1'},

    {id:2,title:'book 2', author:'author 2'},
    
    {id:3,title:'book 3',author:'author 3'}
]




app.get('/books' , (req,res,next)=>{

    res.json(books)

    // res.sendFile(path.join(__dirname ,'public' ,'index.html'))
})

app.post('/books',(req,res,next)=>{

    console.log(req.body)

    const newBook = {
        id: books.length +1,
        title : req.body.title,
        author: req.body.author
    }

})


app.listen(8080)