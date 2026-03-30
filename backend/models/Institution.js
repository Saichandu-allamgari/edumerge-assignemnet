import mongoose from "mongoose";

const institutionSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

export default mongoose.model("Institution", institutionSchema);