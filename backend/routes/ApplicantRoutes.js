// import express from "express";
// import { createApplicant } from "../controllers/ApplicantController.js";

// const router = express.Router();

// router.post("/", createApplicant);

// export default router;


import express from "express";
import {
  createApplicant,
  getApplicants   // 👈 import here
} from "../controllers/ApplicantController.js";

const router = express.Router();

router.post("/", createApplicant);
router.get("/", getApplicants);   // 👈 ADD THIS LINE

export default router;