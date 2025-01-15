import React from "react";
import "./Fees1.css";

const Fees1 = () => {
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
        <button className="add-voucher-btn">Add Voucher</button>
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
            <tr>
              <td>0906</td>
              <td>Huzaifa</td>
              <td>BS CS</td>
              <td>Fall-24</td>
              <td>3rd</td>
              <td>July 1, 2025</td>
              <td>
                <span className="status-paid">● Paid</span>
              </td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
            <tr>
              <td>0906</td>
              <td>Huzaifa</td>
              <td>BS CS</td>
              <td>Fall-24</td>
              <td>3rd</td>
              <td>July 1, 2025</td>
              <td>
                <span className="status-paid">● Paid</span>
              </td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
            <tr>
              <td>0906</td>
              <td>Huzaifa</td>
              <td>BS CS</td>
              <td>Fall-24</td>
              <td>3rd</td>
              <td>July 1, 2025</td>
              <td>
                <span className="status-paid">● Paid</span>
              </td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
            <tr>
              <td>0906</td>
              <td>Huzaifa</td>
              <td>BS CS</td>
              <td>Fall-24</td>
              <td>3rd</td>
              <td>July 1, 2025</td>
              <td>
                <span className="status-paid">● Paid</span>
              </td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
            <tr>
              <td>0906</td>
              <td>Huzaifa</td>
              <td>BS CS</td>
              <td>Fall-24</td>
              <td>3rd</td>
              <td>July 1, 2025</td>
              <td>
                <span className="status-paid">● Paid</span>
              </td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
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

