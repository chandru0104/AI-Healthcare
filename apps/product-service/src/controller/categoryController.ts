import { categoryAddService } from "../service/category";
import { Request,Response } from "express";

interface AuthReq extends Request{
    user:{
        _id:string
    }
}

export const categoryAddController = async(req:Request,res:Response) =>{
    try{
    const getUserId = req as AuthReq
    
    const {name} = req.body
    const userId = getUserId.user._id

    if(!name){
        throw new Error("Fill the category name");
    }
    const categoryData =await categoryAddService(name,userId)

    res.status(201).json({
        success:true,
        message:"Create Category",
        data:categoryData
    })
   }catch(error:any){
    res.status(400).json({
        success:false,
        message:"Create Category Failed"
    })
   }
}