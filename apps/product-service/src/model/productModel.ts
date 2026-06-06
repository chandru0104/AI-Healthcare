import mongoose from "mongoose";


const product = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    benifit:{
        type:String,
        required:true
    },
    image:{
        type:[String],
        required:true,
        default:[]
    },
    variant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Variant"
    },
    subategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subategory"
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    childCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ChildCategory"
    },
    Origin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Origin"
    },
    ExpiryOn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ExpiryOn"
    },
    Brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Brand"
    },
    ageGroup:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AgeGroup"
    },
    returnPolicy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"returnPolicy"
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    updatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    is_active:{
        default:1,
        type:Number,
        required:true
    },
    status:{
        default:1,
        type:Number,
        required:true
    }

},{timestamps:true})

export const Product = mongoose.model("Product",product)