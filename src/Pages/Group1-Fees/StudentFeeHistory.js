import React from "react";
import { useParams } from "react-router-dom";
import './StudentFeeHistory.css';  // Import the CSS file

const StudentFeeHistory = () => {
  const { name } = useParams();

  const allMockFeeHistory = {
    "Ibraheem": [
      { rollNo: "S101", name: "Ibraheem", program: "BSCS", batch: "fall-2024", semester: "1st", status: "paid" },
      { rollNo: "S101", name: "Ibraheem", program: "BSCS", batch: "fall-2024", semester: "2nd", status: "not paid" },
    ],
    "Moosa": [
      { rollNo: "S102", name: "Moosa", program: "BSCS", batch: "spring-2024", semester: "1st", status: "paid" },
      { rollNo: "S102", name: "Moosa", program: "BSCS", batch: "spring-2024", semester: "2nd", status: "paid" },
    ],
    "Sultan": [
      { rollNo: "S103", name: "Sultan", program: "BSIT", batch: "fall-2024", semester: "1st", status: "not paid" },
    ]
  };

  const studentFeeHistory = allMockFeeHistory[name] || [];


  return (
    <div className="student-fee-history">
      <h2>Fee History for Student: {name}</h2>
      <table className="history-table">
        <thead>
          
            <th>Roll Number</th>
            <th>Name</th>
            <th>Program</th>
            <th>Batch</th>
            <th>Semester</th>
            <th>Status</th>
          
        </thead>
        <tbody>
          {studentFeeHistory.map(record => (
            <tr key={record.name}>
              <td>{record.rollNo}</td>
              <td>{record.name}</td>
              <td>{record.program}</td>
              <td>{record.batch}</td>
              <td>{record.semester}</td>
              <td>{record.status}</td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentFeeHistory;
