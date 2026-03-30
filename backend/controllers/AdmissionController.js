import Admission from "../models/Admission.js";
import SeatMatrix from "../models/SeatMatrixModel.js";

// export const allocateSeat = async (req, res) => {
//   try {
//     const { applicantId, programId, quotaType } = req.body;

//     const seatMatrix = await SeatMatrix.findOne({ programId });

//     const quota = seatMatrix.quotas.find(q => q.type === quotaType);

//     if (!quota) return res.status(400).json({ msg: "Quota not found" });

//     if (quota.filledSeats >= quota.totalSeats) {
//       return res.status(400).json({ msg: "Quota Full" });
//     }

//     quota.filledSeats += 1;
//     await seatMatrix.save();

//     const admission = await Admission.create({
//       applicantId,
//       programId,
//       quotaType
//     });

//     res.json(admission);

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

export const allocateSeat = async (req, res) => {
  try {
    const { applicantId, programId, quotaType } = req.body;

    const seatMatrix = await SeatMatrix.findOne({ programId });

    if (!seatMatrix) {
      return res.status(400).json({ error: "SeatMatrix not found" });
    }

    const quota = seatMatrix.quotas.find(q => q.type === quotaType);

    if (!quota) {
      return res.status(400).json({ error: "Invalid quota" });
    }

    if (quota.filledSeats >= quota.totalSeats) {
      return res.status(400).json({ error: "Quota Full ❌" });
    }

    // ✅ Increase filled seats
    quota.filledSeats += 1;
    await seatMatrix.save();

    // ✅ Create admission record
    const admission = await Admission.create({
      applicantId,
      programId,
      quotaType
    });

    res.json(admission);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// export const confirmAdmission = async (req, res) => {
//   try {
//     const { admissionId } = req.body;

//     const admission = await Admission.findById(admissionId);

//     if (admission.feeStatus !== "Paid") {
//       return res.status(400).json({ msg: "Fee not paid" });
//     }

//     admission.confirmed = true;
//     admission.admissionNumber = `ADM-${Date.now()}`;

//     await admission.save();

//     res.json(admission);

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


export const confirmAdmission = async (req, res) => {
  try {
    const { id } = req.params;

    const admission = await Admission.findById(id);

    if (!admission) {
      return res.status(404).json({ error: "Not found" });
    }

    // Fee paid
    admission.feeStatus = "PAID";

    // Confirm admission
    admission.status = "CONFIRMED";

    // Generate unique admission number
    admission.admissionNumber = `ADM-${Date.now()}`;

    await admission.save();

    res.json(admission);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};