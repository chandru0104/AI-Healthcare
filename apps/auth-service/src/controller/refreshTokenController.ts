import { refreshTokenService } from '../service/refreshTokenService';
import { Request, Response } from 'express';

export const refreshTokenController = (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    throw new Error('Refresh Token expried');
  }

  const accessToken = refreshTokenService(req.body);

  res.status(200).json({
    success: true,
    accessToken,
    message: 'Access token are generator',
  });
};
