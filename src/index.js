// import mongoose from "mongoose"
// import { DB_NAME } from "./constant.js"
import connectdb from "./db/index.js";
import { app } from "./app.js";
import dotenv from "dotenv"
dotenv.config({
    path: './env'
})


connectdb()
.then( ()=>{
      app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`server is running at ${process.env.PORT}`)
      })

      app.on  ("error",(err)=>{
        console.log(" error --> ", err);
        throw err;
      })
})
.catch( (err)=>{
    console.log(" mongo db connection failed ", err)
})


















/*

// import dotenv from 'dotenv';
// dotenv.config();
import express from "express"
const app=express()
;( async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log(" error is :",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(` app is listning at port ${process.env.PORT}`)
        })
    }catch(error){
        console.log("error-->", error)
    }
})()


*/




