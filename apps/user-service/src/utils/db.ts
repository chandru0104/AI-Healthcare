import mongoose from "mongoose"
import env from "dotenv"

env.config()

export const connectDB =async()=>{
    try{
    await mongoose.connect("mongodb://localhost:27017/AI-health")
    console.log("DB connected")
    }catch(error:any){
        console.error(error.message)
    }
}