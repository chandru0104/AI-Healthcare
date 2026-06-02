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

  const rawOtp = await redis.get<string>(`email:${email}`);

  if (!rawOtp) {
    throw new validationError("Your OTP expired");
  }

  const verifyOtp = await bcrypt.compare(
    userOtp.toString(),
    rawOtp
  );

  if (!verifyOtp) {
    throw new validationError("Please enter correct OTP");
  }

  // Optional: mark OTP verified
  await redis.set(`verified:${email}`, "true", {
    ex: 300,
  });


};