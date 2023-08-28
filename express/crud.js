

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
    books.push(data)
    data.id = books.length + 1;

    res.status(201).json(books)
})

app.put('/book/:id',(req,res)=>{

    const id = parseInt(req.params.id)

    const index = books.findIndex( book => book.id === id)

    const updatedData = req.body


    
    if(index !== -1){
        // books[index] = {...books[index],...updatedData}
        books[index] = {...updatedData}

        res.json(books)


    }else{
        res.status(404).json(books)
    }

})

app.delete('/book/:id',(req,res)=>{

    const id = parseInt(req.params.id)

    const index = books.findIndex( book => book.id === id)

    const DeletedData = books[index]

    if(index !== -1){
        books = books.filter((i)=> {
           return i.id !== id
        })
        res.json(books)
    }else{
        res.status(404).json(books)
    }

})

app.listen(8080)