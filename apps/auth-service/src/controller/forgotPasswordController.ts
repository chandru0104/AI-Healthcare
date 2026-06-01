import { Response,Request } from "express";
import { validationError } from '../utils/errorHaddler';
import {forgotPasswordService} from "../service/forgotPasswordService"

export const forgotPasswordContrroller =async(req:Request,res:Response)=>{

    const {email} =req.body
    
    if(!email){
        throw new validationError("Fill the email filed")
    }

    await forgotPasswordService(req.body)
    
    res.status(200).json({
        success:true,
        message:"Send OTP in your email"
    })

}