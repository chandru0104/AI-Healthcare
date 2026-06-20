import {addProductService} from "../service/productService"
import { Response } from "express"

export const addProductController = async(req:any,res:Response)=>{
   try{
       const {...data} =req.body
       const file= req.files
       const userId = req.user.id
       const addProduct = await addProductService(file,data,userId)

       res.status(200).json({
          success:true,
          message:"Product added successfully",
          data:addProduct
       })


   }catch(error:any){
    
       res.status(400).json({
          success:false,
          message:error.message
       })

   }
}