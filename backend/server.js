// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";

// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Routes
// import institutionRoutes from "./routes/InstitutionRoutes.js";
// import programRoutes from "./routes/ProgramRoutes.js";
// import applicantRoutes from "./routes/ApplicantRoutes.js";
// import admissionRoutes from "./routes/AdmissionRoutes.js";

// app.use("/api/institutions", institutionRoutes);
// app.use("/api/programs", programRoutes);
// app.use("/api/applicants", applicantRoutes);
// app.use("/api/admissions", admissionRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


import dotenv from "dotenv";
dotenv.config(); // ✅ MUST be first

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();

// Connect DB AFTER env loaded
connectDB();

app.use(cors());
app.use(express.json());

// Routes
import institutionRoutes from "./routes/InstitutionRoutes.js";
import programRoutes from "./routes/ProgramRoutes.js";
import applicantRoutes from "./routes/ApplicantRoutes.js";
import admissionRoutes from "./routes/AdmissionRoutes.js";
import dashboardRoutes from "./routes/dashboardRoute.js";
import seatMatrixRoutes from "./routes/seatMatrixRoutes.js";

app.use("/api/institutions", institutionRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/applicants", applicantRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/seat-matrix", seatMatrixRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});