import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./StudentFeeHistory.css"; // Import the CSS file

const StudentFeeHistory = () => {
  const { name } = useParams();

  // Mock data with feeProof field
  const allMockFeeHistory = {
    Ibraheem: [
      { rollNo: "S101", name: "Ibraheem", program: "BSCS", batch: "fall-2024", semester: "1st Installment", date: "January 17, 2025", status: "paid", feeProof: null },
      { rollNo: "S101", name: "Ibraheem", program: "BSCS", batch: "fall-2024", semester: "1st Final", date: "January 17, 2025", status: "not paid", feeProof: null },
    ],
    Moosa: [
      { rollNo: "S102", name: "Moosa", program: "BSCS", batch: "spring-2024", semester: "1st Installment", date: "January 17, 2025", status: "paid", feeProof: "https://example.com/moosa-fee-proof.pdf" },
      { rollNo: "S102", name: "Moosa", program: "BSCS", batch: "spring-2024", semester: "1st Final", date: "January 17, 2025", status: "paid", feeProof: null },
    ],
    Sultan: [
      { rollNo: "S103", name: "Sultan", program: "BSIT", batch: "fall-2024", semester: "1st Installment", date: "January 17, 2025", status: "not paid", feeProof: null },
    ],
  };

  const initialHistory = allMockFeeHistory[name] || [];
  const [feeHistory, setFeeHistory] = useState(initialHistory);

  return (
    <div className="student-fee-history">
      <h2>Fee History for Student: <span>{name}</span></h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Program</th>
            <th>Batch</th>
            <th>Semester</th>
            <th>Date</th>
            <th>Status</th>
            <th>Receipt</th>
          </tr>
        </thead>
        <tbody>
          {feeHistory.map((record, index) => (
            <tr key={index}>
              <td>{record.rollNo}</td>
              <td>{record.name}</td>
              <td>{record.program}</td>
              <td>{record.batch}</td>
              <td>{record.semester}</td>
              <td>{record.date}</td>
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
    </div>
  );
};

export default StudentFeeHistory;
