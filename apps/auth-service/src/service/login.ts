import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { User } from '../model/loginModel';
import { validationError } from '../utils/errorHaddler';
dotenv.config();

export const loginSevice = async (data: any) => {
  const { email, password } = data;

  if (!email || !password) {
    throw new validationError('Please enter your required fields');
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new validationError('User not found');
  }

  const userPassword = await bcrypt.compare(password, user.password as string);

  if (!userPassword) {
    throw new validationError('Enter your password correctly');
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.SECRET_KEY as string,
    {
      expiresIn: '1d',
    },
  );

  return {
    id: user.id,
    role: user.role,
    email: user.email,
    token,
  };
};
