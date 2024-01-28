const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors=require('cors')


const app = express();
const port = 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongouri = "mongodb+srv://adil:alima7860@cluster0.fz1gfhn.mongodb.net/testProject?retryWrites=true&w=majority";
mongoose.connect(mongouri)
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((err) => {
    console.log(err);
  });

  const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
  })

  const User=new mongoose.model("User",userSchema )



  app.get("/",(req,res)=>{
   
    res.send("myapp")
  })

  app.post("/login",(req,res)=>{
    res.send("login")

  })

  app.post("/register",(req,res)=>{
   const {name,email,password}=req.body

   const user=new User({
    name,
    email,
    password,
    
   })
   user.save((err)=>{
      if(err){
        res.send(err)
      }
   })

  })

  app.listen(port,()=>{
    console.log("port started")
  })