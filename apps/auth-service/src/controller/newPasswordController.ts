import { Request, Response } from 'express';
import { validationError } from '../utils/errorHaddler';
import { newPasswordService } from '../service/newPasswordService';

export const newPasswordController = async (req: Request, res: Response) => {
  const { newPassword, confirmPassword } = req.body;

  if (!newPassword || !confirmPassword) {
    throw new validationError('Please fill the require filed');
  }

  const user = await newPasswordService(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
};
