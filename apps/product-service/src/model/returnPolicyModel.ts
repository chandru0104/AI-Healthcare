import mongoose from "mongoose";

const returnPolicy=new mongoose.Schema({

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
        default:1,
        type:Number,
        required:true
    },
    status:{
        default:1,
        type:Number,
        required:true
    }
},  { timestamps: true,
    toJSON:{
      transform:function(doc,ret:any){
        const { __v, ...rest } = ret; 
        return rest;
      }
    }
   },)

export const ReturnPolicy = mongoose.model("ReturnPolicy",returnPolicy)