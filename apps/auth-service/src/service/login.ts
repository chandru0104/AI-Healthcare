import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import {User} from "../model/loginModel"
dotenv.config()

export const loginSevice =async(data:any)=>{
    const {email,password}=data

    if(!email||!password){
        return("Please enter your require filed")
    }

    try{
        const user = await User.findOne({email})

        if(!user){
            return "user not found"
        }
       
        const userPassword:any = bcrypt.compare(password,user.password as string)


        if(!userPassword){
            return "Enter your password correctly"
        }

        const decoded = jwt.sign({id:user.id,role:user.role,},process.env.SECRET_KEY as string,{expiresIn:"1d"})
        
        req.user=decoded

        return {
            id:user.id,
            role:user.role,
            email:user.email,
            
        }

    }catch(error:any){
        
    }
          
}