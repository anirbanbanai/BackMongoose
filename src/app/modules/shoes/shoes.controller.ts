import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ShoesService } from "./shoes.service";
import { Request, Response } from "express";
import { shoesInterface } from "./shoe.interface";

const createShoes = catchAsync(async (req, res) => {
  const user = req.body;
  const result = await ShoesService.createShoesIntoDb(user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Shoes create successfully",
    data: result,
  });
});

const getShoes = catchAsync(async (req, res) => {
  const result = await ShoesService.getShoesIntoDb();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review fatched successfully",
    data: result,
  });
});
const getShoeByFilterC = catchAsync(async (req, res) => {
 
  const filters: Partial<shoesInterface> = req.query;
  const filteredShoes = await ShoesService.getShoeByFilter(filters);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review fatched successfully",
    data: filteredShoes,
  });
});

const deleteSingleShoes = catchAsync(async (req, res) => {
  const { _id } = req.params;

  const result = await ShoesService.deleteSingleShoesFromDb(_id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Deleted",
    data: result,
  });
});
const updateSingleShoes = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const updatedData = req.body;
  const result = await ShoesService.getUpdateShoesData(_id, updatedData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User updated successfully!",
    data: result,
  });
});

export const shoesController = {
  createShoes,
  getShoes,
  deleteSingleShoes,
  updateSingleShoes,
  getShoeByFilterC,
};
