// "use client";

// import { useEffect, useState } from "react";
// import API from "../../services/api";

// export default function Dashboard() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     API.get("/dashboard")
//       .then(res => setData(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

//       {!data ? "Loading..." : (
//         <div className="grid grid-cols-3 gap-4">

//           <div className="bg-white p-4 shadow">
//             Total Intake: {data.totalIntake}
//           </div>

//           <div className="bg-white p-4 shadow">
//             Admitted: {data.admitted}
//           </div>

//           <div className="bg-white p-4 shadow">
//             Fee Pending: {data.feePending}
//           </div>

//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import API from "../../services/api";

interface DashboardData {
  totalIntake: number;
  totalFilled: number;
  admitted: number;
  remaining: number;
  feePending: number;
  pendingDocs: number;
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    API.get("/dashboard")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 gap-4">

      <div className="bg-white p-4 shadow">
        Total Intake: {data.totalIntake}
      </div>

      <div className="bg-white p-4 shadow">
        Filled Seats: {data.totalFilled}
      </div>

      <div className="bg-white p-4 shadow">
        Admitted: {data.admitted}
      </div>

      <div className="bg-white p-4 shadow">
        Remaining: {data.remaining}
      </div>

      <div className="bg-white p-4 shadow">
        Fee Pending: {data.feePending}
      </div>

      <div className="bg-white p-4 shadow">
        Pending Docs: {data.pendingDocs}
      </div>

    </div>
  );
}