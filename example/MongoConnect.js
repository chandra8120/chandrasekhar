const express=require('express')
const mongoose = require('mongoose')


const app=express()

app.get('/',(req,res)=>{
    res.send("hello homepage")
})

mongoose.connect("mongodb+srv://chandra_8120:chandra@cluster0.k6nq4jt.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
.then(()=>console.log("DB connected"))
.catch(error=>console.log(error,"display error msg"))

app.listen(3300,()=>console.log("server running..."))