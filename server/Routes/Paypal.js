import express from "express";
import { createOrder } from "../Controllers/CreateOrder.js";
import capturePayment from '../Controllers/CapturePayment.js'
const router = express.Router(); //router config

// Paypal: Payments Routes
router.post("/createOrder", createOrder);
router.get("/capturePayment/:paymentId", capturePayment);
export default router;
