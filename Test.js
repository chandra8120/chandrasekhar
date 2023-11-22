const express=require('express')
const app=express()

const data=[{
    "name":"chandra","age":25
},
{
"name":"sekhar","age":35
}
]


app.get('/data',(req,res)=>{
 res.send(data)
 console.log("data added")
})

app.listen(3200)