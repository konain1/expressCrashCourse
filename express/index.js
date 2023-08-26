
const express = require('express')
const path = require('path')
const app = express()

console.log(__dirname)


app.use(express.static('example'))

app.get('/ecom' , (req,res,next)=>{
    res.sendFile(path.join(__dirname , 'example', 'index.html'))
})

app.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(__dirname, 'Contact.html'))
})
app.get('/',(req,res,next)=>{

    res.sendFile(path.join(__dirname, 'index.html'))

})
app.all('*',(req,res)=>{

    res.send("<h1>Page Not Found</h1>")
})


app.listen(8080)