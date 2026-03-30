// import mongoose from "mongoose";

// const quotaSchema = new mongoose.Schema({
//   type: {
//     type: String,
//     enum: ["KCET", "COMEDK", "Management"]
//   },
//   totalSeats: Number,
//   filledSeats: { type: Number, default: 0 }
// });

// const seatMatrixSchema = new mongoose.Schema({
//   programId: { type: mongoose.Schema.Types.ObjectId, ref: "Program" },
//   academicYear: String,
//   quotas: [quotaSchema]
// });

// export default mongoose.model("SeatMatrix", seatMatrixSchema);


import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  category: { type: String },
  quotaType: { type: String },
  marks: { type: Number }
});

export default mongoose.models.Applicant ||
  mongoose.model("Applicant", applicantSchema);