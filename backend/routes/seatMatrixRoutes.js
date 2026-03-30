import express from "express";
import { createSeatMatrix } from "../controllers/seatMatrixController.js";

const router = express.Router();

router.post("/", createSeatMatrix);

export default router;