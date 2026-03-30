// import Program from "../models/Program.js";

// export const createProgram = async (req, res) => {
//   try {
//     const program = await Program.create(req.body);
//     res.json(program);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

import Program from "../models/Program.js";

// CREATE PROGRAM
export const createProgram = async (req, res) => {
  try {
    const program = await Program.create(req.body);
    res.json(program);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// GET ALL PROGRAMS
export const getPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};