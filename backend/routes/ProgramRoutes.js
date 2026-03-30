// import express from "express";
// import { createProgram } from "../controllers/ProgramController.js";

// const router = express.Router();

// router.post("/", createProgram);

// export default router;

import express from "express";
import {
  createProgram,
  getPrograms
} from "../controllers/ProgramController.js";

const router = express.Router();

router.post("/", createProgram);
router.get("/", getPrograms);

export default router;