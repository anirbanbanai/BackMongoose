import { TsaleHistory } from "./saleHisoty.interface";
import { SaleHistoryModel } from "./saleHistory.models";

const createSsaleHistoryIntoDb = async (sale: TsaleHistory) => {
    const newShoes = await SaleHistoryModel.create(sale);
    return newShoes;
  };
  const getSaleHostoryIntoDb = async () => {
    const newShoes = await SaleHistoryModel.find();
    return newShoes;
  };

  export const SaleHistoryService = {
   createSsaleHistoryIntoDb,
   getSaleHostoryIntoDb
  };