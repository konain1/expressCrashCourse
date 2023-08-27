
const express = require('express')
const path = require('path')
const app = express()

const products = require('./data')
console.log(__dirname)


app.use(express.static('example'))

app.get('/home',(req,res,next)=>{

    res.sendFile(path.join(__dirname, 'home.html'))

})

app.get('/ecom' , (req,res,next)=>{
    res.sendFile(path.join(__dirname , 'example', 'index.html'))
})

app.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(__dirname, 'Contact.html'))
})

app.get('/api' , (req,res)=>{

    const newItem = products.map((item)=> {
       const {name,price,id} = item
       return {name,price,id}

    // return "oneplus" !== item.name  compare by value


    })

    res.json(newItem)

})

app.get('/singleProduct/:id',(req,res)=>{

    const {id} = req.params

    const productItem = products.find((item) => item.id === Number(id) )

    if(!productItem){
        res.status(404).send("id not found")
    }
    res.json(productItem)
})

app.get('/api/query',(req,res)=>{
    console.log(req.query)
    let {search,limit} = req.query

    let filterProducts = [...products]

    if(search){

        filterProducts = filterProducts.slice(0,limit).filter((item)=>{
            return item.name.toLowerCase().startsWith(search)
        })
    }
    

    console.log(filterProducts)

    res.json(filterProducts)
})


app.all('*',(req,res)=>{

    res.send("<h1>Page Not Found</h1>")
})


;
app.listen(8080)