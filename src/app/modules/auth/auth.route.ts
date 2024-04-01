import express from 'express'
import { validateRequest } from '../../middleware/validateRequest';
import { authValidation } from './auth.validation';
import { authController } from './auth.controller';

const router = express.Router();

router.post("/auth/login", validateRequest(authValidation.loginValidation), authController.loginUser);


export const AuthRoutes = router;