const express=require("express")
const app=express()
const cors = require('cors');
app.use(cors());

   const data=[
    {
        name:"Chandra",
         "id":25,
         "email":"chandrasekhar@gmail.com"
    },
    {
        name:"Sekhar",
        "id":26,
        "email":"chandhu8120@gmail.com"
    },
    {
        name:"Sridhar",
        "id":10,
        "email":"chandrakuruva8120@gmail.com"
    },
    {
        name:"Vikash",
        "id":13,
        "email":"chandhu8120@gmail.com"
    },
    {
        name:"Venky",
        "id":32,
        "email":"chandhu8220@gmail.com"
    },
    {
        name:"Ramanji",
        "id":50,
        "email":"ramanji8120@gmail.com"
    }

]


app.get("/users",(req,res)=>{
    res.send(data)
    console.log("successfully connected")
})
app.listen(3001,()=>console.log("server running..."))