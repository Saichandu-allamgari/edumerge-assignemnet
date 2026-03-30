"use client";

import { useEffect, useState } from "react";
import API from "../../services/api";

export default function Admissions() {
  const [list, setList] = useState([]);

  const fetchAdmissions = async () => {
    const res = await API.get("/admissions");
    setList(res.data);
  };

  useEffect(() => {
    fetchAdmissions();
  }, []);

  const confirm = async (id) => {
    await API.put(`/admissions/confirm/${id}`);
    fetchAdmissions();
  };

  return (
    <div>
      <h1>Admissions</h1>

      {list.map(a => (
        <div key={a._id} className="border p-2 mt-2">
          <p>Quota: {a.quotaType}</p>
          <p>Status: {a.status}</p>
          <p>Fee: {a.feeStatus}</p>

          {a.status !== "CONFIRMED" && (
            <button onClick={() => confirm(a._id)}>
              Confirm Admission
            </button>
          )}
        </div>
      ))}
    </div>
  );
}