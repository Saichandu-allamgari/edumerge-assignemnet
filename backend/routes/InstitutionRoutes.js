import express from "express";
import { createInstitution } from "../controllers/InstitutionController.js";

const router = express.Router();

router.post("/", createInstitution);

export default router;