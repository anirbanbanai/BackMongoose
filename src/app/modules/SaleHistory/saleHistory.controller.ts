import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { SaleHistoryService } from "./saleHistory.service";
import { ShoesService } from "../shoes/shoes.service";

const createSaleH = catchAsync(async (req, res) => {
    const user = req.body;
    user.dateOfSale = new Date()
    const result = await SaleHistoryService.createSsaleHistoryIntoDb(user);

    

    await ShoesService.getUpdateShoesData(user.ProductId, user.quantity);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Saleing product successfully",
      data: result,
    });
  });
  
  const getSaleH = catchAsync(async (req, res) => {
    const result = await SaleHistoryService.getSaleHostoryIntoDb()
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Review fatched successfully",
      data: result,
    });
  });

  export const SaleHCOntroller = {
    getSaleH,
    createSaleH
  }