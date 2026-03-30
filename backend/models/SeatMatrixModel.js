


import mongoose from "mongoose";

const quotaSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["KCET", "COMEDK", "Management"]
  },
  totalSeats: Number,
  filledSeats: { type: Number, default: 0 }
});

const seatMatrixSchema = new mongoose.Schema({
  programId: { type: mongoose.Schema.Types.ObjectId, ref: "Program" },
  academicYear: String,
  quotas: [quotaSchema]
});

// ✅ FIX HERE
export default mongoose.models.SeatMatrix ||
  mongoose.model("SeatMatrix", seatMatrixSchema);