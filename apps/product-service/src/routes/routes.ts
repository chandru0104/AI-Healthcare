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

import { 
  addAgeGroupController,
  listAgeGroupController,
  updateAgeGroupController,
  deleteAgeGroupController
} from '../controller/ageGroupController';

import { 
  addChildCategoryController,
  listChildCategoryController,
  updateChildCategoryController,
  deleteChildCategoryController
} from '../controller/childCategoryController';




import { authMiddleware } from '../middleware/authMiddleware';

export const router = express.Router();

//Category api list
router.post('/api/category/add', authMiddleware, categoryAddController);
router.get('/api/category/list', authMiddleware, serviceListController);
router.put('/api/category/update/:id', authMiddleware, categoryUpdateController);
router.put('/api/category/delete/:id', authMiddleware, categoryDeleteController);

//Brand api list
router.post("/api/brand/add",authMiddleware,addBrandController)
router.get("/api/brand/list",authMiddleware,listBrandController) 
router.put("/api/brand/update/:id",authMiddleware,updateBrandController)
router.put("/api/brand/delete/:id",authMiddleware,deleteBrandController)

//Age Group
router.post("/api/age-group/add",authMiddleware,addAgeGroupController)
router.get("/api/age-group/list",authMiddleware,listAgeGroupController) 
router.put("/api/age-group/update/:id",authMiddleware,updateAgeGroupController)
router.put("/api/age-group/delete/:id",authMiddleware,deleteAgeGroupController)

//Child Category
router.post("/api/child-category/add",authMiddleware,addChildCategoryController)
router.get("/api/child-category/list",authMiddleware,listChildCategoryController) 
router.put("/api/child-category/update/:id",authMiddleware,updateChildCategoryController)
router.put("/api/child-category/delete/:id",authMiddleware,deleteChildCategoryController)
