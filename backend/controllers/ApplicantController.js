// import Applicant from "../models/Applicant.js";

// export const createApplicant = async (req, res) => {
//   try {
//     const applicant = await Applicant.create(req.body);
//     res.json(applicant);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


import Applicant from "../models/Applicant.js";

// CREATE
export const createApplicant = async (req, res) => {
  try {
    const applicant = await Applicant.create(req.body);
    res.json(applicant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL (👉 ADD THIS HERE)
export const getApplicants = async (req, res) => {
  try {
    const data = await Applicant.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};