import express from "express"
import {categoryAddController} from "../controller/categoryController"
import {authMiddleware} from "../middleware/authMiddleware"

export const router =express.Router()

router.post("/api/category/add",categoryAddController)