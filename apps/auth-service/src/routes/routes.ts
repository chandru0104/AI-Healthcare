import express from 'express';
import { loginController } from '../controller/loginController';
import { forgotPasswordContrroller } from '../controller/forgotPasswordController';
import { verifyOtpController } from '../controller/verifyOtpController';
import { newPasswordController } from '../controller/newPasswordController';
import { refreshTokenController } from '../controller/refreshTokenController';

export const router = express.Router();

router.post('/api/login', loginController);
router.post('/api/forgot/password', forgotPasswordContrroller);
router.post('/api/verfiy/otp', verifyOtpController);
router.post('/api/new/password', newPasswordController);
router.post('/api/refresh-token', refreshTokenController);
