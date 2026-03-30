"use client";

import { useEffect, useState } from "react";
import API from "../../services/api";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/dashboard")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {!data ? "Loading..." : (
        <div className="grid grid-cols-3 gap-4">

          <div className="bg-white p-4 shadow">
            Total Intake: {data.totalIntake}
          </div>

          <div className="bg-white p-4 shadow">
            Admitted: {data.admitted}
          </div>

          <div className="bg-white p-4 shadow">
            Fee Pending: {data.feePending}
          </div>

        </div>
      )}
    </div>
  );
}