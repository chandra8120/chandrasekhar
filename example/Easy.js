const express=require("express")     //this is react type import  import react from 'react

const app=express()

app.get('/',(request,responce)=>{
responce.send("Hello world!! from Responces !!")
console.log("showing our terminal view  visual studio");
})

app.get('/username',(request,responce)=>{
    responce.send("Hello this is chandra !!")
    console.log("terminal view  visual studio");
    })
    
app.listen(4000,()=>console.log("Server starting..."))