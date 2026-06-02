import { redis } from "../utils/redis";
import { validationError } from "../utils/errorHaddler";
import bcrypt from "bcrypt";

export const verifyOtpService = async (
  email: any,
  userOtp: any
) => {

  if (!userOtp) {
    throw new validationError("Enter your OTP");
  }

  const storedOtp:any = await redis.get(`email:${email}`) 

  if (!storedOtp) {
    throw new validationError("Your OTP expired");
  }

  const verifyOtp = await bcrypt.compare(
    userOtp,
    storedOtp.otp
  );

  if (!verifyOtp) {
    throw new validationError("Please enter correct OTP");
  }

  // Optional: mark OTP verified
  await redis.set(`verified:${email}`, "true", {
    ex: 300,
  });


};