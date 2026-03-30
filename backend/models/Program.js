// import mongoose from "mongoose";

// const programSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   courseType: { type: String, enum: ["UG", "PG"] },
//   entryType: { type: String, enum: ["Regular", "Lateral"] },
//   totalIntake: { type: Number, required: true }
// });

// export default mongoose.model("Program", programSchema);

import mongoose from "mongoose";

const programSchema = new mongoose.Schema({
  name: { type: String, required: true },
  courseType: { type: String, enum: ["UG", "PG"], required: true },
  entryType: { type: String, enum: ["Regular", "Lateral"], required: true },
  totalIntake: { type: Number, required: true }
});

export default mongoose.models.Program ||
  mongoose.model("Program", programSchema);