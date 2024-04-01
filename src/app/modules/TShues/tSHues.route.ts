import express from 'express'
import { shoesController } from './tShues.controller'
import { auth } from '../../middleware/auth'
import { USER_ROLE } from '../User/user.interface'
const router = express.Router()

router.post("/auth/tshoes",auth(USER_ROLE.seller), shoesController.createShoes)
router.get("/auth/tshoes", shoesController.getShoes)
router.get("/auth/tshoesf", shoesController.getShoeByFilterC)
router.delete("/auth/tshoes/:_id", shoesController.deleteSingleShoes)

router.put("/auth/tshoes/update/:_id", shoesController.updateSingleShoes)

router.get("/auth/tshoes/:_id", shoesController.getSinglShoesData)

export const TshoesRouter = router;