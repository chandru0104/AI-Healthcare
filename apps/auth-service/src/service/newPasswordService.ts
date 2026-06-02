import { validationError } from '../utils/errorHaddler';
import { redis } from '../utils/redis';
import { User } from '../model/loginModel';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const salt = Number(process.env.SALT);

export const newPasswordService = async (data: any) => {
  const { email, newPassword, confirmPassword } = data;

  if (!email || !newPassword || !confirmPassword) {
    throw new validationError('Please fill the filed');
  }

  const getVerify: any = await redis.get(`email:${email}`);

  if (!getVerify) {
    throw new validationError(
      'Please again try to OTP verification reason you long time',
    );
  }

  const user = await User.findOne({ email });

  const hashPassword = await bcrypt.hash(confirmPassword, salt);

  await User.findByIdAndUpdate(user?.id, { password: hashPassword });

  await redis.del(`email:${email}`);

  return {
    message: 'Password change successfully',
    user: user?.id,
    role: user?.role,
    email: user?.email,
  };
};
