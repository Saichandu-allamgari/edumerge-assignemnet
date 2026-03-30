import express from "express";
import {
  allocateSeat,
  confirmAdmission
} from "../controllers/AdmissionController.js";

const router = express.Router();

router.post("/allocate", allocateSeat);
// router.post("/confirm", confirmAdmission);
router.put("/confirm/:id", confirmAdmission);

export default router;