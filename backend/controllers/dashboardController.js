import SeatMatrix from "../models/SeatMatrixModel.js";
import Admission from "../models/Admission.js";
import Applicant from "../models/Applicant.js";

// export const getDashboard = async (req, res) => {
//   try {
//     // Total Intake
//     const seatMatrices = await SeatMatrix.find();

//     let totalIntake = 0;
//     let totalFilled = 0;

//     seatMatrices.forEach(sm => {
//       sm.quotas.forEach(q => {
//         totalIntake += q.totalSeats;
//         totalFilled += q.filledSeats;
//       });
//     });

//     // Admissions
//     const admissions = await Admission.find();

//     const admitted = admissions.filter(a => a.confirmed).length;
//     const feePending = admissions.filter(a => a.feeStatus === "Pending").length;

//     // Pending Documents
//     const applicants = await Applicant.find({
//       "documents.status": { $ne: "Verified" }
//     });

//     res.json({
//       totalIntake,
//       admitted,
//       totalFilled,
//       remaining: totalIntake - totalFilled,
//       feePending,
//       pendingDocs: applicants.length
//     });

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };



export const getDashboard = async (req, res) => {
  try {
    const programs = await Program.find();
    const admissions = await Admission.find();

    const totalIntake = programs.reduce(
      (sum, p) => sum + p.totalIntake,
      0
    );

    const totalAllocated = admissions.length;

    const admitted = admissions.filter(
      a => a.status === "CONFIRMED"
    ).length;

    const feePending = admissions.filter(
      a => a.feeStatus === "PENDING"
    ).length;

    res.json({
      totalIntake,           // fixed
      allocated: totalAllocated,
      admitted,
      remaining: totalIntake - totalAllocated,
      feePending
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};