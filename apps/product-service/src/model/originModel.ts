import mongoose from "mongoose";

const originModel=new mongoose.Schema({

    name:{
        type:String,
        required:true
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
},{timestamps:true})

export const OriginModel = mongoose.model("Origin",originModel)