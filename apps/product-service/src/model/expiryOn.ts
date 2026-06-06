import mongoose from "mongoose";

const expiryOn = new mongoose.Schema({

    data:{
        type:Date,
        required:true
    },
    status:{
        default:1,
        type:Number
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    updatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    is_active:{
        default:1,
        type:Number,
        required:true
    },

    
},{timestamps:true})

export const ExpiryOn = mongoose.model("ExpiryOn",expiryOn)