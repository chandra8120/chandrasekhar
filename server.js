const express=require('express')
const app=express()

// app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})

const products=[
    {
        id:1,
        name:"iphone",
        price:500000
    },
    {
        id:2,
        name:"samsung",
        price:200000,
    },
    {
        id:3,
        name:"Redmi",
        price:15000
    }
    ]


    app.get('/products',(req,res)=>{
     res.json(products)
    })
    
    // app.get('/products/:id',(req,res)=>{
    //  const newData=products.filter(item=>item.id.toString()===req.params.id);
    //  return res.send(newData);
    // })

  app.post('/addproducts',(req,res)=>{
    const {id,name}=req.body;
    console.log(id,name,price);
    return res.send("Data Stored!!")
  })

app.listen(5000,()=>console.log("server running..."))