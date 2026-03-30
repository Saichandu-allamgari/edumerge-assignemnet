// // // "use client";

// // // import { useState } from "react";
// // // import API from "../../services/api";

// // // export default function Applicants() {
// // //   const [form, setForm] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     category: "GM",
// // //     quotaType: "KCET",
// // //     marks: ""
// // //   });

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       await API.post("/applicants", form);
// // //       alert("Applicant Created Successfully");
// // //     } catch (err) {
// // //       console.log(err);
// // //       alert("Error creating applicant");
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h1 className="text-xl mb-4">Create Applicant</h1>

// // //       <form onSubmit={handleSubmit} className="space-y-3">

// // //         <input
// // //           placeholder="Name"
// // //           className="border p-2 w-full"
// // //           onChange={e => setForm({ ...form, name: e.target.value })}
// // //         />

// // //         <input
// // //           placeholder="Email"
// // //           className="border p-2 w-full"
// // //           onChange={e => setForm({ ...form, email: e.target.value })}
// // //         />

// // //         <input
// // //           placeholder="Phone"
// // //           className="border p-2 w-full"
// // //           onChange={e => setForm({ ...form, phone: e.target.value })}
// // //         />

// // //         <input
// // //           placeholder="Marks"
// // //           className="border p-2 w-full"
// // //           onChange={e => setForm({ ...form, marks: e.target.value })}
// // //         />

// // //         <select
// // //           className="border p-2 w-full"
// // //           onChange={e => setForm({ ...form, category: e.target.value })}
// // //         >
// // //           <option>GM</option>
// // //           <option>SC</option>
// // //           <option>ST</option>
// // //         </select>

// // //         <select
// // //           className="border p-2 w-full"
// // //           onChange={e => setForm({ ...form, quotaType: e.target.value })}
// // //         >
// // //           <option>KCET</option>
// // //           <option>COMEDK</option>
// // //           <option>Management</option>
// // //         </select>

// // //         <button className="bg-blue-500 text-white px-4 py-2">
// // //           Submit
// // //         </button>

// // //       </form>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { useState, useEffect } from "react";
// // import API from "../../services/api";

// // export default function Applicants() {
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     phone: ""
// //   });

// //   const [list, setList] = useState([]);

// // //   const fetchApplicants = async () => {
// // //     const res = await API.get("/applicants");
// // //     setList(res.data);
// // //   };


// // const fetchApplicants = async () => {
// //   try {
// //     const res = await API.get("/applicants");
// //     console.log("FRONTEND DATA:", res.data); // 👈 ADD
// //     setList(res.data);
// //   } catch (err) {
// //     console.log("FRONTEND ERROR:", err); // 👈 ADD
// //   }
// // };

// //   useEffect(() => {
// //     fetchApplicants();
// //   }, []);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     await API.post("/applicants", form);

// //     alert("Saved ✅");

// //     fetchApplicants(); // refresh list
// //   };

// //   return (
// //     <div>
// //       <h1>Create Applicant</h1>

// //       <form onSubmit={handleSubmit}>
// //         <input placeholder="Name"
// //           onChange={e => setForm({ ...form, name: e.target.value })} />

// //         <input placeholder="Email"
// //           onChange={e => setForm({ ...form, email: e.target.value })} />

// //         <button>Submit</button>
// //       </form>

// //       <h2>Applicants List</h2>

// //       {/* {list.map(a => (
// //         <div key={a._id} className="border p-2 my-2">
// //           {a.name} - {a.email}
// //         </div>
// //       ))} */}
// //       {list.length === 0 ? (
// //   <p>No applicants found</p>
// // ) : (
// //   list.map(a => (
// //     <div key={a._id}>
// //       {a.name} - {a.email}
// //     </div>
// //   ))
// // )}
// //     </div>
// //   );
// // }



// "use client";

// import { useState, useEffect } from "react";
// import API from "../../services/api";

// export default function Applicants() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     quotaType: "KCET"
//   });

//   const [list, setList] = useState([]);

//   const fetchApplicants = async () => {
//     try {
//       const res = await API.get("/applicants");
//       setList(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchApplicants();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await API.post("/applicants", form);
//       alert("Applicant Created ✅");
//       fetchApplicants();
//     } catch (err) {
//       alert("Error");
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-xl mb-4">Applicants</h1>

//       {/* FORM */}
//       <form onSubmit={handleSubmit} className="space-y-2">

//         <input
//           placeholder="Name"
//           className="border p-2"
//           onChange={e => setForm({ ...form, name: e.target.value })}
//         />

//         <input
//           placeholder="Email"
//           className="border p-2"
//           onChange={e => setForm({ ...form, email: e.target.value })}
//         />

//         <select
//           className="border p-2"
//           onChange={e => setForm({ ...form, quotaType: e.target.value })}
//         >
//           <option>KCET</option>
//           <option>COMEDK</option>
//           <option>Management</option>
//         </select>

//         <button className="bg-blue-500 text-white px-3 py-1">
//           Add Applicant
//         </button>

//       </form>

//       {/* LIST */}
//       <h2 className="mt-6">Applicant List</h2>

//       {list.length === 0 ? (
//         <p>No applicants yet</p>
//       ) : (
//         list.map(a => (
//           <div key={a._id} className="border p-2 mt-2">
//             <p><b>{a.name}</b></p>
//             <p>{a.email}</p>
//             <p>Quota: {a.quotaType}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import API from "../../services/api";

interface Applicant {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export default function ApplicantsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [list, setList] = useState<Applicant[]>([]);

  // ✅ Fetch applicants
  const fetchApplicants = async () => {
    try {
      const res = await API.get("/applicants");
      setList(res.data);
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  // ✅ FIXED TypeScript error here
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await API.post("/applicants", form);

      alert("Applicant Created ✅");

      // clear form
      setForm({
        name: "",
        email: "",
        phone: ""
      });

      fetchApplicants(); // refresh list
    } catch (err: any) {
      console.log(err);
      alert("Error creating applicant");
    }
  };

  return (
    <div>
      <h1 className="text-xl mb-4">Applicants</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input
          placeholder="Name"
          value={form.name}
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          value={form.email}
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          placeholder="Phone"
          value={form.phone}
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <button className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>

      {/* LIST */}
      <h2 className="text-lg mb-2">Applicants List</h2>

      {list.length === 0 && <p>No applicants found</p>}

      {list.map((a) => (
        <div
          key={a._id}
          className="border p-3 mb-2 bg-white rounded"
        >
          <p><b>Name:</b> {a.name}</p>
          <p><b>Email:</b> {a.email}</p>
          <p><b>Phone:</b> {a.phone}</p>
        </div>
      ))}
    </div>
  );
}