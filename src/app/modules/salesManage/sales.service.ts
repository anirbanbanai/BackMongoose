import { SaleInterface } from "./sales.interface";
import { SaleModels } from "./sales.models";

const createSaleManageIntoDb = async(sale: SaleInterface)=>{
    const newSale = await SaleModels.create(sale);
    return newSale;
}

const getSaleManageIntoDb = async()=>{
    const result = await SaleModels.find();
    return result
}

export const SaleService = {
    createSaleManageIntoDb,
    getSaleManageIntoDb
}