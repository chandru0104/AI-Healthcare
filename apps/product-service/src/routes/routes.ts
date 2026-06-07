import express from 'express';
import {
  categoryAddController,
  serviceListController,
  categoryUpdateController,
} from '../controller/categoryController';
import { authMiddleware } from '../middleware/authMiddleware';

export const router = express.Router();

router.post('/api/category/add', authMiddleware, categoryAddController);
router.get('/api/category/list', authMiddleware, serviceListController);
router.put('/api/category/update/:id', authMiddleware, categoryUpdateController);
