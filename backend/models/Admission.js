// import mongoose from "mongoose";

// const admissionSchema = new mongoose.Schema({
//   applicantId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Applicant"
//   },
//   programId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Program"
//   },
//   quotaType: String,
//   admissionNumber: { type: String, unique: true },
//   feeStatus: {
//     type: String,
//     enum: ["Pending", "Paid"],
//     default: "Pending"
//   },
//   confirmed: { type: Boolean, default: false }
// });

// export default mongoose.model("Admission", admissionSchema);

import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
  applicantId: { type: mongoose.Schema.Types.ObjectId, ref: "Applicant" },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: "Program" },

  quotaType: String,

  status: {
    type: String,
    enum: ["ALLOCATED", "CONFIRMED"],
    default: "ALLOCATED"
  },

  feeStatus: {
    type: String,
    enum: ["PENDING", "PAID"],
    default: "PENDING"
  },

  admissionNumber: {
    type: String,
    unique: true,
    sparse: true
  }

}, { timestamps: true });

export default mongoose.models.Admission ||
  mongoose.model("Admission", admissionSchema);