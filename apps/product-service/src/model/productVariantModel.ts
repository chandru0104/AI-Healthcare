import mongoose from "mongoose";

const variant=new mongoose.Schema({

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

export const Variant = mongoose.model("Variant",variant)