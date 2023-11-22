const express=require('express')

const app=express()

const users=[
    {name:"chandra",age:25,roll:345,username:"qwerty",},
    {name:"sekhar",age:30,roll:678,username:"asdfgh",},
    {name:"madhan",age:43,roll:234,username:"zxcvb",},
    {name:"jagan",age:23,roll:432,username:"yhbvc",},
    {name:"azith",age:32,roll:876,username:"iuyghjk",}
]


app.get('/users',(req,res)=>{
 res.send(users)
 console.log("test just lokking running in terminal our output");
})

app.listen(3500)