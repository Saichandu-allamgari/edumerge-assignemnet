// "use client";

// import { useEffect, useState } from "react";
// import API from "../../services/api";

// export default function Admissions() {
//   const [list, setList] = useState([]);

//   const fetchAdmissions = async () => {
//     const res = await API.get("/admissions");
//     setList(res.data);
//   };

//   useEffect(() => {
//     fetchAdmissions();
//   }, []);

//   const confirm = async (id) => {
//     await API.put(`/admissions/confirm/${id}`);
//     fetchAdmissions();
//   };

//   return (
//     <div>
//       <h1>Admissions</h1>

//       {list.map(a => (
//         <div key={a._id} className="border p-2 mt-2">
//           <p>Quota: {a.quotaType}</p>
//           <p>Status: {a.status}</p>
//           <p>Fee: {a.feeStatus}</p>

//           {a.status !== "CONFIRMED" && (
//             <button onClick={() => confirm(a._id)}>
//               Confirm Admission
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import API from "../../services/api";

interface Admission {
  _id: string;
  applicantId: {
    name: string;
  };
  programId: {
    name: string;
  };
  quotaType: string;
  status: string;
  feeStatus: string;
}

export default function AdmissionsPage() {
  const [list, setList] = useState<Admission[]>([]);

  const fetchAdmissions = async () => {
    try {
      const res = await API.get("/admissions");
      setList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAdmissions();
  }, []);

  // ✅ FIXED TYPE HERE
  const confirmAdmission = async (id: string) => {
    try {
      await API.put(`/admissions/confirm/${id}`);
      alert("Admission Confirmed ✅");
      fetchAdmissions();
    } catch (err) {
      console.log(err);
      alert("Error confirming admission");
    }
  };

  return (
    <div>
      <h1 className="text-xl mb-4">Admissions</h1>

      {list.length === 0 && <p>No admissions found</p>}

      {list.map((a) => (
        <div key={a._id} className="border p-3 mb-3 bg-white rounded">
          <p><b>Student:</b> {a.applicantId?.name}</p>
          <p><b>Program:</b> {a.programId?.name}</p>
          <p><b>Quota:</b> {a.quotaType}</p>
          <p><b>Status:</b> {a.status}</p>
          <p><b>Fee:</b> {a.feeStatus}</p>

          {a.status !== "CONFIRMED" && (
            <button
              onClick={() => confirmAdmission(a._id)}
              className="bg-green-500 text-white px-3 py-1 mt-2"
            >
              Confirm Admission
            </button>
          )}
        </div>
      ))}
    </div>
  );
}