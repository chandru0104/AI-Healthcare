import mongoose from "mongoose";


const ageGroup = new mongoose.Schema({

    name:{
        type:String,
        require:true,
        enum:["Children","Adult"]
    },
    status:{
        default:1,
        type:Number
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    UpdatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    is_active:{
        type:Number,
        required:true
    },
    active:{
        type:Number,
        required:true
    }
},   
{ timestamps:true})


export const AgeGroup =  mongoose.model("AgeGroup",ageGroup)