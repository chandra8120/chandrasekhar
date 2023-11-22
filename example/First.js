// const mongoose = require("mongoose");
// const express = require("express");
// const app = express();
// const form = require('./Model');
// app.use(express.json());                  //middle vare using express js

// app.get("/", (req, res) => {
//   res.send("<h2>hello chandra</h2>");
// });

// mongoose
//   .connect(
//     "mongodb+srv://chandra_8120:chandra@cluster0.k6nq4jt.mongodb.net/yourDatabaseName?retryWrites=true&w=majority"
//   )
//   .then(() => console.log("DB connected..."))
//   .catch((error) => console.log("error displayed", error));

// app.post("/addbrands", async (req, res) => {
  
//   try {
//     const {name,email,mobile}  = req.body;
//     console.log(req.body,"namee");

//     const exist = await form.findOne({name});

//     if(exist){
// return res.status(400).send('user already reg')
//     }
//     const newUser=new form({
//       name,email,mobile
//     })
//     newUser.save()
//     return res.status(200).send("user data successfully added !!!")

//   }
//   catch(err){
//   console.log(err,'display error message..')
//   }
  
// })

// app.listen(3500, () => console.log("server running...."))
