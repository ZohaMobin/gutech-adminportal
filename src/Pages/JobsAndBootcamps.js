import React, { useState } from "react";
import "./JobsndBootcamps.css";

const AdminJobsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [bootcamps, setBootcamps] = useState([]);

  const handleAddBootcamp = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newBootcamp = {
      title: formData.get("title"),
      type: formData.get("type"),
      fee: formData.get("fee"),
      location: formData.get("location"),
    };

    setBootcamps([...bootcamps, newBootcamp]);

    setShowForm(false);
    event.target.reset();
  };

  return (
    <div className="admin-page-container">
      <h1 className="admin-title">Job Opportunities</h1>
      <div className="admin-actions">
        <button className="admin-button">Sort By</button>
        <button className="admin-button">Filter</button>
        <button className="admin-add-button" onClick={() => setShowForm(true)}>
          + Add Jobs / Bootcamps
        </button>
      </div>

      <div className="job-cards">
        {bootcamps.map((bootcamp, index) => (
          <div className="job-card" key={index}>
            <h3 className="job-title">{bootcamp.title}</h3>
            <p className="job-detail1">Type: {bootcamp.type}</p>
            <p className="job-detail2">Fee: {bootcamp.fee}</p>
            <p className="job-detail3">Location: {bootcamp.location}</p>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="form-overlay">
          <form className="add-bootcamp-form" onSubmit={handleAddBootcamp}>
            <h2 className="form-title">Add Bootcamp</h2>
            <label>
              Job/Bootcamp Title:
              <input type="text" name="title" required />
            </label>
            <label>
              Type:
              <input type="text" name="type" placeholder="Full-time, Evening" required />
            </label>
            <label>
              Fee/Salary:
              <input type="number" name="fee" placeholder="Amount" required />
            </label>
            <label>
              Location:
              <input type="text" name="location" required />
            </label>
            <button type="submit" className="form-submit-button">
              Add
            </button>
            <button
              type="button"
              className="form-cancel-button"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminJobsPage;
