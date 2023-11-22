const express=require("express")     

const app=express()
const MongoClient=require('mongodb').MongoClient;

app.get('/users',(request,responce)=>{
    const users=['chandra','sekhar','super','sridhar']
    responce.send(users)
   console.log('hii')
})

app.get('/username',(request,responce)=>{
    MongoClient.connect("mongodb+srv://chandrasekhar:Chandra@123@cluster0.qy5gbsc.mongodb.net/")
        if(err) throw err;
        console.log("Database connected !!")
        db.close()


    //  .then(()=>{
    //    console.log("Database successfullt added!");
    // })
     
    // .catch((error)=>{
    //     console.log("error identifier",error)
    // })
    })

app.listen(4000)