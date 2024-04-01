import express from 'express'
import { shoesController } from './shoes.controller';
import { auth } from '../../middleware/auth';
import { USER_ROLE } from '../User/user.interface';
const router = express.Router()

router.post("/auth/shoes",auth(USER_ROLE.seller), shoesController.createShoes)
router.get("/auth/shoes", shoesController.getShoes)
router.get("/auth/shoesf", shoesController.getShoeByFilterC)
router.delete("/auth/shoes/:_id", shoesController.deleteSingleShoes)
router.put("/auth/shoes/:_id", shoesController.updateSingleShoes)

export const shoesRouter = router;