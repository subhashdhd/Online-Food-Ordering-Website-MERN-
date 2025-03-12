import express from "express"
import { listOrders, placeOrder, updateStatus, userOrders } from "../controllers/orderController.js"
import authMiddleware from "../middleware/auth.js";
import { varifyOrder } from "../controllers/orderController.js";


const orderRouter=express.Router();

orderRouter.post("/place",authMiddleware,placeOrder)
orderRouter.post("/verify",varifyOrder)
orderRouter.post("/userorders",authMiddleware,userOrders);
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)




export default orderRouter;
