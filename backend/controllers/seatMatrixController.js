import SeatMatrix from "../models/SeatMatrixModel.js";

export const createSeatMatrix = async (req, res) => {
  try {
    const { programId, academicYear, quotas } = req.body;

    const totalSeats = quotas.reduce((sum, q) => sum + q.totalSeats, 0);

    if (totalSeats <= 0) {
      return res.status(400).json({ msg: "Invalid quotas" });
    }

    const seatMatrix = await SeatMatrix.create({
      programId,
      academicYear,
      quotas
    });

    res.json(seatMatrix);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};