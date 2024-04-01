import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { SaleService } from "./sales.service";

const createSaleManage = catchAsync(async (req, res) => {
    const sale = req.body;
    const result = await SaleService.createSaleManageIntoDb(sale);
    await 
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Shoes create successfully",
      data: result,
    });
  });

  const getSaleManage = catchAsync(async (req, res) => {
  
    const result = await SaleService.getSaleManageIntoDb()
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review fatched successfully',
      data: result,
    })
  })

  export const SaleController = {
    createSaleManage,
    getSaleManage
  }