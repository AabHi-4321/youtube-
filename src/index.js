// import mongoose from "mongoose"
// import { DB_NAME } from "./constant.js"
import connectdb from "./db/index.js";
import dotenv from "dotenv"
dotenv.config({
    path: './env'
})


connectdb()
















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




