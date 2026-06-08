import express from 'express';
import {
  categoryAddController,
  serviceListController,
  categoryUpdateController,
  categoryDeleteController
} from '../controller/categoryController';

import { 
  addBrandController,
  listBrandController,
  updateBrandController,
  deleteBrandController
} from '../controller/brandController';
import { authMiddleware } from '../middleware/authMiddleware';

export const router = express.Router();

//category api list
router.post('/api/category/add', authMiddleware, categoryAddController);
router.get('/api/category/list', authMiddleware, serviceListController);
router.put('/api/category/update/:id', authMiddleware, categoryUpdateController);
router.put('/api/category/delete/:id', authMiddleware, categoryDeleteController);

//Brand api list
router.post("/api/brand/add",authMiddleware,addBrandController)
router.get("/api/brand/list",authMiddleware,listBrandController) 
router.put("/api/brand/update/:id",authMiddleware,updateBrandController)
router.put("/api/brand/delete/:id",authMiddleware,deleteBrandController)