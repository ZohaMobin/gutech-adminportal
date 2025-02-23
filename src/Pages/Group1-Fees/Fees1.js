import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Fees1.css";

const Fees1 = () => {
  // Array of students
  const students = [
    {
      rollNo: "0906",
      name: "Ibraheem",
      program: "BS CS",
      batch: "Fall-24",
      semester: "3rd",
      dueDate: "July 1, 2025",
      status: "paid",
    },
    {
      rollNo: "0907",
      name: "Moosa",
      program: "BS CS",
      batch: "Fall-24",
      semester: "3rd",
      dueDate: "July 1, 2025",
      status: "paid",
    },
    {
      rollNo: "0908",
      name: "Sultan",
      program: "BS CS",
      batch: "Fall-24",
      semester: "3rd",
      dueDate: "July 1, 2025",
      status: "paid",
    },
  ];
  

  return (
    <div className="fees-container">
      <header className="fees-header">
        <h1>Fees</h1>
        <p>View students fees</p>
      </header>

      <div className="fees-controls">
        <input type="text" placeholder="Search Student Name" />
        <input type="text" placeholder="Search Student ID" />
        <button>Select Program</button>
        <button>Select Batch</button>
        <button>Select Semester</button>
        <button className="add-voucher-btn">
          <Link to={`/feeVoucher`}>Add Voucher</Link>
        </button>
      </div>

      <div className="fees-table-container">
        <table className="fees-table">
          <thead>
            <tr>
              <th>Roll No.</th>
              <th>Student Name</th>
              <th>Program</th>
              <th>Batch</th>
              <th>Semester</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Past Record</th>
            </tr>
          </thead>
          <tbody>
            {/* Dynamically generate student rows */}
            {students.map((student) => (
              <tr key={student.rollNo}>
                <td>{student.rollNo}</td>
                <td>
                  {student.name}
                </td>
                <td>{student.program}</td>
                <td>{student.batch}</td>
                <td>{student.semester}</td>
                <td>{student.dueDate}</td>
                <td>
                  <span className={`status-${student.status}`}>
                    ● {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                  </span>
                </td>
                <td>
                  <button className="view-btn"><Link to={`/student-fee-history/${student.name}`}>View</Link></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <div className="pagination-left">
            <span>Show</span>
            <select>
              <option value="11">11</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          <div className="pagination-center">
            <span>Row</span>
            <div className="pagination-buttons">
              <button>&lt;</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <span> ... </span>
              <button>10</button>
              <button>&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees1;
