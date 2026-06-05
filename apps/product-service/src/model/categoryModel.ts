import mongoose from "mongoose";

export const categoryModel = new mongoose.Schema({
     
    name:{
        type:String,
        required:true,
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

},{timestamps:true})

export const CategoryModel = mongoose.model("Category",categoryModel)