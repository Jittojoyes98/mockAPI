import express from "express";
import router from "./routes/users.js"
// const express=require('express')
import bodyParser from "body-parser";

const app=express()
app.use(bodyParser.json())

const PORT=5000

app.use('/users',router)

app.get('/',(req,res)=>{
    res.send("An API here")
})

app.listen(PORT,()=>{
    console.log("Hello there")
})
