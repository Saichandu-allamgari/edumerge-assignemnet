// // // // "use client";

// // // // import { useState } from "react";
// // // // import API from "../../services/api";

// // // // export default function Allocation() {
// // // //   const [form, setForm] = useState({
// // // //     applicantId: "",
// // // //     programId: "",
// // // //     quotaType: "KCET"
// // // //   });

// // // //   const handleAllocate = async () => {
// // // //     try {
// // // //       await API.post("/admissions/allocate", form);
// // // //       alert("Seat Allocated Successfully");
// // // //     } catch (err) {
// // // //       alert(err.response?.data?.msg || "Error");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h1 className="text-xl mb-4">Seat Allocation</h1>

// // // //       <input
// // // //         placeholder="Applicant ID"
// // // //         className="border p-2 w-full mb-2"
// // // //         onChange={e => setForm({ ...form, applicantId: e.target.value })}
// // // //       />

// // // //       <input
// // // //         placeholder="Program ID"
// // // //         className="border p-2 w-full mb-2"
// // // //         onChange={e => setForm({ ...form, programId: e.target.value })}
// // // //       />

// // // //       <select
// // // //         className="border p-2 w-full mb-2"
// // // //         onChange={e => setForm({ ...form, quotaType: e.target.value })}
// // // //       >
// // // //         <option>KCET</option>
// // // //         <option>COMEDK</option>
// // // //         <option>Management</option>
// // // //       </select>

// // // //       <button
// // // //         onClick={handleAllocate}
// // // //         className="bg-green-500 text-white px-4 py-2"
// // // //       >
// // // //         Allocate Seat
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // }


// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import API from "../../services/api";

// // // export default function Allocation() {
// // //   const [applicants, setApplicants] = useState([]);
// // //   const [selectedApplicant, setSelectedApplicant] = useState("");

// // //   const [programId, setProgramId] = useState("");
// // //   const [quotaType, setQuotaType] = useState("KCET");

// // //   useEffect(() => {
// // //     API.get("/applicants").then(res => setApplicants(res.data));
// // //   }, []);

// // //   const allocate = async () => {
// // //     try {
// // //       await API.post("/admissions/allocate", {
// // //         applicantId: selectedApplicant,
// // //         programId,
// // //         quotaType
// // //       });

// // //       alert("Seat Allocated ✅");
// // //     } catch (err) {
// // //       alert(err.response?.data?.msg || "Error");
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Allocation</h1>

// // //       {/* Applicant Dropdown */}
// // //       <select onChange={e => setSelectedApplicant(e.target.value)}>
// // //         <option>Select Applicant</option>
// // //         {applicants.map(a => (
// // //           <option key={a._id} value={a._id}>
// // //             {a.name}
// // //           </option>
// // //         ))}
// // //       </select>

// // //       <input
// // //         placeholder="Program ID"
// // //         onChange={e => setProgramId(e.target.value)}
// // //       />

// // //       <select onChange={e => setQuotaType(e.target.value)}>
// // //         <option>KCET</option>
// // //         <option>COMEDK</option>
// // //         <option>Management</option>
// // //       </select>

// // //       <button onClick={allocate}>Allocate Seat</button>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { useEffect, useState } from "react";
// // import API from "../../services/api";

// // export default function Allocation() {
// //   const [applicants, setApplicants] = useState([]);
// //   const [programs, setPrograms] = useState([]);

// //   const [selectedApplicant, setSelectedApplicant] = useState("");
// //   const [programId, setProgramId] = useState("");
// //   const [quotaType, setQuotaType] = useState("KCET");

// //   // Fetch Applicants + Programs
// //   useEffect(() => {
// //     API.get("/applicants").then(res => setApplicants(res.data));
// //     API.get("/programs").then(res => setPrograms(res.data));
// //   }, []);

// //   const allocate = async () => {
// //     try {
// //       await API.post("/admissions/allocate", {
// //         applicantId: selectedApplicant,
// //         programId,
// //         quotaType
// //       });

// //       alert("Seat Allocated ✅");
// //     } catch (err) {
// //       console.log(err);
// //       alert(err.response?.data?.msg || "Error");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1 className="text-xl mb-4">Seat Allocation</h1>

// //       {/* Applicant Dropdown */}
// //       <select
// //         className="border p-2 mb-2 w-full"
// //         onChange={e => setSelectedApplicant(e.target.value)}
// //       >
// //         <option>Select Applicant</option>
// //         {applicants.map(a => (
// //           <option key={a._id} value={a._id}>
// //             {a.name}
// //           </option>
// //         ))}
// //       </select>

// //       {/* Program Dropdown */}
// //       <select
// //         className="border p-2 mb-2 w-full"
// //         onChange={e => setProgramId(e.target.value)}
// //       >
// //         <option>Select Program</option>
// //         {programs.map(p => (
// //           <option key={p._id} value={p._id}>
// //             {p.name}
// //           </option>
// //         ))}
// //       </select>

// //       {/* Quota */}
// //       <select
// //         className="border p-2 mb-2 w-full"
// //         onChange={e => setQuotaType(e.target.value)}
// //       >
// //         <option>KCET</option>
// //         <option>COMEDK</option>
// //         <option>Management</option>
// //       </select>

// //       <button
// //         onClick={allocate}
// //         className="bg-green-500 text-white px-4 py-2"
// //       >
// //         Allocate Seat
// //       </button>
// //     </div>
// //   );
// // }


// "use client";

// import { useEffect, useState } from "react";
// import API from "../../services/api";

// export default function Allocation() {
//   const [applicants, setApplicants] = useState([]);
//   const [programs, setPrograms] = useState([]);

//   const [selectedApplicant, setSelectedApplicant] = useState("");
//   const [programId, setProgramId] = useState("");
//   const [quotaType, setQuotaType] = useState("KCET");

//   useEffect(() => {
//     // Fetch Applicants
//     API.get("/applicants")
//       .then(res => {
//         console.log("APPLICANTS:", res.data);
//         setApplicants(res.data);
//       })
//       .catch(err => console.log(err));

//     // Fetch Programs
//     API.get("/programs")
//       .then(res => {
//         console.log("PROGRAMS:", res.data);
//         setPrograms(res.data);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   const allocate = async () => {
//     if (!selectedApplicant || !programId) {
//       alert("Select applicant & program");
//       return;
//     }

//     try {
//       await API.post("/admissions/allocate", {
//         applicantId: selectedApplicant,
//         programId,
//         quotaType
//       });

//       alert("Seat Allocated ✅");
//     } catch (err) {
//       console.log(err);
//       alert(err.response?.data?.error || "Error");
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-xl mb-4">Seat Allocation</h1>

//       {/* Applicant Dropdown */}
//       <select
//         className="border p-2 mb-2 w-full"
//         value={selectedApplicant}
//         onChange={e => setSelectedApplicant(e.target.value)}
//       >
//         <option value="">Select Applicant</option>

//         {applicants.length > 0 ? (
//           applicants.map(a => (
//             <option key={a._id} value={a._id}>
//               {a.name}
//             </option>
//           ))
//         ) : (
//           <option disabled>No Applicants</option>
//         )}
//       </select>

//       {/* Program Dropdown */}
//       <select
//         className="border p-2 mb-2 w-full"
//         value={programId}
//         onChange={e => setProgramId(e.target.value)}
//       >
//         <option value="">Select Program</option>

//         {programs.length > 0 ? (
//           programs.map(p => (
//             <option key={p._id} value={p._id}>
//               {p.name}
//             </option>
//           ))
//         ) : (
//           <option disabled>No Programs Found</option>
//         )}
//       </select>

//       {/* Quota */}
//       <select
//         className="border p-2 mb-2 w-full"
//         value={quotaType}
//         onChange={e => setQuotaType(e.target.value)}
//       >
//         <option>KCET</option>
//         <option>COMEDK</option>
//         <option>Management</option>
//       </select>

//       <button
//         onClick={allocate}
//         className="bg-green-500 text-white px-4 py-2"
//       >
//         Allocate Seat
//       </button>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import API from "../../services/api";

interface Applicant {
  _id: string;
  name: string;
}

interface Program {
  _id: string;
  name: string;
}

export default function AllocationPage() {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);

  const [selectedApplicant, setSelectedApplicant] = useState<string>("");
  const [programId, setProgramId] = useState<string>("");
  const [quotaType, setQuotaType] = useState<string>("KCET");

  // ✅ Fetch applicants
  const fetchApplicants = async () => {
    try {
      const res = await API.get("/applicants");
      setApplicants(res.data);
    } catch (err: any) {
      console.log(err);
    }
  };

  // ✅ Fetch programs
  const fetchPrograms = async () => {
    try {
      const res = await API.get("/programs");
      setPrograms(res.data);
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApplicants();
    fetchPrograms();
  }, []);

  // ✅ Allocate Seat
  const allocate = async () => {
    if (!selectedApplicant || !programId) {
      alert("Please select applicant and program");
      return;
    }

    try {
      await API.post("/admissions/allocate", {
        applicantId: selectedApplicant,
        programId,
        quotaType
      });

      alert("Seat Allocated ✅");

      // refresh applicants (optional improvement later)
      fetchApplicants();

    } catch (err: any) {
      console.log(err);
      alert(err?.response?.data?.error || "Allocation Failed");
    }
  };

  return (
    <div>
      <h1 className="text-xl mb-4">Seat Allocation</h1>

      {/* Applicant Dropdown */}
      <select
        className="border p-2 w-full mb-3"
        onChange={(e) => setSelectedApplicant(e.target.value)}
      >
        <option value="">Select Applicant</option>
        {applicants.map((a) => (
          <option key={a._id} value={a._id}>
            {a.name}
          </option>
        ))}
      </select>

      {/* Program Dropdown */}
      <select
        className="border p-2 w-full mb-3"
        onChange={(e) => setProgramId(e.target.value)}
      >
        <option value="">Select Program</option>
        {programs.map((p) => (
          <option key={p._id} value={p._id}>
            {p.name}
          </option>
        ))}
      </select>

      {/* Quota */}
      <select
        className="border p-2 w-full mb-3"
        onChange={(e) => setQuotaType(e.target.value)}
      >
        <option value="KCET">KCET</option>
        <option value="COMEDK">COMEDK</option>
        <option value="Management">Management</option>
      </select>

      <button
        onClick={allocate}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Allocate Seat
      </button>
    </div>
  );
}