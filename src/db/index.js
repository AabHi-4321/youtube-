import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"

const connectdb=async()=>{
    try{
       const connectioninstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`mongoose connected ${connectioninstance.connection.host}`)
    }
    catch(error){
        console.log(" mongoose connection failed ",error);
        process.exit(1);
    }
}

export default connectdb