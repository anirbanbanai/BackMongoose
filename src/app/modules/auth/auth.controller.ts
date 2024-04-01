import httpStatus from "http-status";
import { AuthService } from "./auth.service"
import { sendResponse } from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import config from "../../config";

const loginUser = catchAsync(async(req,res)=>{
    const result = await AuthService.loginUser(req.body);

    const { token } = result;

    res.cookie('refreshToken', token, {
      secure: config.NODE_ENV === 'production',
      httpOnly: true,
    });
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User login successful',
        data: result,
      })
})

export const authController  = {
    loginUser
}