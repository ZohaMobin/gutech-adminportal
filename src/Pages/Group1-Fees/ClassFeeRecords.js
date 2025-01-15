import React from "react";
import { useNavigate } from "react-router-dom";
import './ClassFeeRecords.css';  // Import the CSS file

const ClassFeeRecords = () => {
  const navigate = useNavigate();

  // Mock data for class fee records
  const mockFeeRecords = [
    { studentId: "S101", name: "Ibraheem", lastPaymentDate: "2025-01-10", amount: 500, status: "Paid" },
    { studentId: "S102", name: "Moosa", lastPaymentDate: "2025-01-12", amount: 500, status: "Pending" },
    { studentId: "S103", name: "Sultan", lastPaymentDate: "2025-01-09", amount: 500, status: "Paid" },
  ];

  return (
    <div className="class-fee-records">
      <h2>Class Fee Records</h2>
      <table className="fee-table">
        <thead>
          
            <th>Student ID</th>
            <th>Name</th>
            <th>Last Payment Date</th>
            <th>Amount Paid</th>
            <th>Status</th>
            <th>Action</th>
          
        </thead>
        <tbody>
          {mockFeeRecords.map(record => (
            <tr key={record.studentId}>
              <td>{record.studentId}</td>
              <td>{record.name}</td>
              <td>{record.lastPaymentDate}</td>
              <td>{record.amount}</td>
              <td>{record.status}</td>
              <td>
                <button onClick={() => navigate(`/fees/student/${record.name}`)}>
                  View History
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassFeeRecords;
