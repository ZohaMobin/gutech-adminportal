import React from 'react';
import './FeeVoucher.css'

function FeeVoucher() {
  return (
    <div className="fee-voucher-container">
      <h2 className="title">Generate Fee Voucher</h2>
      <p className="description">Fill the form below to generate fee voucher</p>
      <form className="form">
        <div className="form-row">
          <div className="form-group">
            <label>Student Name</label>
            <input type="text" name="studentName" />
          </div>
          <div className="form-group">
            <label>Father Name</label>
            <input type="text" name="fatherName" />
          </div>
          <div className="form-group">
            <label>Roll No</label>
            <input type="text" name="rollNo" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form-group">
            <label>Course</label>
            <select name="course">
              <option value="">Select Course</option>
              <option value="CS">CS</option>
              <option value="BBA">BBA</option>
            </select>
          </div>
          <div className="form-group">
            <label>Batch</label>
            <select name="batch">
              <option value="">Select Batch</option>
              <option value="2025">Class of 2025</option>
              <option value="2026">Class of 2026</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Total Fee</label>
            <input type="text" name="totalfee" />
          </div>
          <div className="form-group">
            <label>Scholarship</label>
            <input type="text" name="scholarship" />
          </div>
        </div>

        <button type="submit" className="submit-button">Generate Challan</button>
      </form>
    </div>
  );
}

export default FeeVoucher;
