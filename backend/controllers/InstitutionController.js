import Institution from "../models/Institution.js";

export const createInstitution = async (req, res) => {
  try {
    const inst = await Institution.create(req.body);
    res.json(inst);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};