import express from "express"
import {loginController} from "../controller/loginController"
import {forgotPasswordContrroller} from "../controller/forgotPasswordController"
import {verifyOtpController} from "../controller/verifyOtpController"

export const router = express.Router()

router.post("/api/login",loginController)
router.post("/api/forgot/password",forgotPasswordContrroller)
router.post("/api/verfiy/otp",verifyOtpController)