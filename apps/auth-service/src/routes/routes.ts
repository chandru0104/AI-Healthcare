import express from "express"
import {loginController} from "../controller/loginController"
import {forgotPasswordContrroller} from "../controller/forgotPasswordController"


export const router = express.Router()

router.post("/api/login",loginController)
router.post("/api/forgot/password",forgotPasswordContrroller)