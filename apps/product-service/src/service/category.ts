import { CategoryModel } from "../model/categoryModel";



export const categoryAddService =async(name:any,userId:any)=>{
    try{
        const createCategory = await CategoryModel.create({name,createdBy:userId})

         return createCategory

    }catch(error:any){
        throw new Error(error.message)
    }
}