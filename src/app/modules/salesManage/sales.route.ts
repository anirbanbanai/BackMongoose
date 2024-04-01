import express from 'express'
import { SaleController } from './sales.cotroller';
const router = express.Router()

router.post("/auth/sale", SaleController.createSaleManage)
router.get("/auth/sale", SaleController.getSaleManage)

export const SaleRouter = router;