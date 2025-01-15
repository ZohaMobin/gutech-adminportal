import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './StudentFeeHistory.css'; // Import the CSS file

const StudentFeeHistory = () => {
  const { name } = useParams();

  // Mock data with feeProof field
  const allMockFeeHistory = {
    "Ibraheem": [
      { rollNo: "S101", name: "Ibraheem", program: "BSCS", batch: "fall-2024", semester: "1st", status: "paid", feeProof: null },
      { rollNo: "S101", name: "Ibraheem", program: "BSCS", batch: "fall-2024", semester: "2nd", status: "not paid", feeProof: null },
    ],
    "Moosa": [
      { rollNo: "S102", name: "Moosa", program: "BSCS", batch: "spring-2024", semester: "1st", status: "paid", feeProof: "https://example.com/moosa-fee-proof.pdf" },
      { rollNo: "S102", name: "Moosa", program: "BSCS", batch: "spring-2024", semester: "2nd", status: "paid", feeProof: null },
    ],
    "Sultan": [
      { rollNo: "S103", name: "Sultan", program: "BSIT", batch: "fall-2024", semester: "1st", status: "not paid", feeProof: null },
    ]
  };

  const initialHistory = allMockFeeHistory[name] || [];
  const [feeHistory, setFeeHistory] = useState(initialHistory);

  const [newSemester, setNewSemester] = useState("");
  const [newStatus, setNewStatus] = useState("");

  const handleAddSemester = () => {
    if (newSemester && newStatus) {
      const newRecord = {
        rollNo: feeHistory[0]?.rollNo || "N/A",
        name: name,
        program: feeHistory[0]?.program || "N/A",
        batch: feeHistory[0]?.batch || "N/A",
        semester: newSemester,
        status: newStatus,
        feeProof: null, // Default value for new records
      };
      setFeeHistory([...feeHistory, newRecord]);
      setNewSemester("");
      setNewStatus("");
    }
  };

  return (
    <div className="student-fee-history">
      <h2>Fee History for Student: {name}</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Program</th>
            <th>Batch</th>
            <th>Semester</th>
            <th>Status</th>
            <th>Fee Proof</th>
          </tr>
        </thead>
        <tbody>
          {feeHistory.map((record) => (
            <tr key={record.rollNo}>
              <td>{record.rollNo}</td>
              <td>{record.name}</td>
              <td>{record.program}</td>
              <td>{record.batch}</td>
              <td>{record.semester}</td>
              <td>{record.status}</td>
              <td>
                {record.feeProof ? (
                  <a href={record.feeProof} target="_blank" rel="noopener noreferrer">
                    View Proof
                  </a>
                ) : (
                  <span>No proof uploaded</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="add-semester-form">
        <h3>Add New Semester</h3>
        <div className="form-group">
          <div>
            <label>
              Semester: 
              <select 
                value={newSemester} 
                onChange={(e) => setNewSemester(e.target.value)} 
              >
                <option value="">Select Semester</option>
                {["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"].map((semester) => (
                  <option key={semester} value={semester}>{semester}</option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>
              Status: 
              <select 
                value={newStatus} 
                onChange={(e) => setNewStatus(e.target.value)}
              >
                <option value="">Select Status</option>
                <option value="paid">Paid</option>
                <option value="not paid">Not Paid</option>
              </select>
            </label>
          </div>
        </div>
        <button onClick={handleAddSemester}>Add Semester</button>
      </div>
    </div>
  );
};

export default StudentFeeHistory;
