import { Router } from "express";
import { userRouter } from "../modules/User/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { shoesRouter } from "../modules/shoes/shoes.route";
import { SaleRouter } from "../modules/salesManage/sales.route";
import { TshoesRouter } from "../modules/TShues/tSHues.route";
import { TsaleHRouter } from "../modules/SaleHistory/saleHistory.route";
const router = Router();
const moduleRouts = [
  {
    path: "/api",
    router: userRouter,
  },
  {
    path: "/api",
    router: AuthRoutes,
  },
  {
    path: "/api",
    router: shoesRouter,
  },
  {
    path: "/api",
    router: TshoesRouter,
  },
  {
    path: "/api",
    router: SaleRouter,
  },
  {
    path: "/api",
    router:TsaleHRouter ,
  },
];

moduleRouts.forEach((route) => router.use(route.path, route.router));

export default router;
