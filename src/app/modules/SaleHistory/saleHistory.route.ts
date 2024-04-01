import express from 'express'
import { SaleHCOntroller } from './saleHistory.controller';
const router = express.Router()

router.post("/auth/tsaleh", SaleHCOntroller.createSaleH)
router.get("/auth/tsaleh", SaleHCOntroller.getSaleH)


export const TsaleHRouter = router;