import React, { useState } from "react";
import "./JobsndBootcamps.css";

const AdminJobsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState(null);
  const [jobs, setJobs] = useState([]); // Separate state for jobs
  const [bootcamps, setBootcamps] = useState([]); // Separate state for bootcamps
  const [sortDropdownVisible, setSortDropdownVisible] = useState(false);

  const handleAddEntry = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newEntry = {
      title: formData.get("title"),
      type: formType,
      fee: formData.get("fee") || formData.get("salary"),
      location: formType === "job" ? formData.get("location") : null,
      company: formType === "job" ? formData.get("company") : null,
      startDate: formData.get("startDate") || null,
      endDate: formData.get("endDate") || null,
      companyLink: formData.get("companyLink") || null,
      dateAdded: new Date(),
    };

    if (formType === "job") {
      setJobs([...jobs, newEntry]); // Add to jobs section
    } else if (formType === "bootcamp") {
      setBootcamps([...bootcamps, newEntry]); // Add to bootcamps section
    }

    setShowForm(false);
    setFormType(null);
    event.target.reset();
  };

  const handleSort = (option) => {
    const sortEntries = (entries, key, order = "asc") => {
      return entries.slice().sort((a, b) => {
        if (order === "asc") {
          return a[key] > b[key] ? 1 : -1;
        } else {
          return a[key] < b[key] ? 1 : -1;
        }
      });
    };

    if (option === "highest salary") {
      setJobs(sortEntries(jobs, "fee", "desc"));
      setBootcamps(sortEntries(bootcamps, "fee", "desc"));
    } else if (option === "lowest salary") {
      setJobs(sortEntries(jobs, "fee", "asc"));
      setBootcamps(sortEntries(bootcamps, "fee", "asc"));
    } else if (option === "latest") {
      setJobs(sortEntries(jobs, "dateAdded", "desc"));
      setBootcamps(sortEntries(bootcamps, "dateAdded", "desc"));
    } else if (option === "oldest") {
      setJobs(sortEntries(jobs, "dateAdded", "asc"));
      setBootcamps(sortEntries(bootcamps, "dateAdded", "asc"));
    }

    setSortDropdownVisible(false);
  };

  return (
    <div className="admin-page-container">
      <h1 className="admin-title">Jobs and Bootcamps</h1>

      <div className="admin-actions">
        <div className="sort-dropdown">
          <button
            className="admin-button"
            onClick={() => setSortDropdownVisible(!sortDropdownVisible)}
          >
            Sort By
          </button>
          {sortDropdownVisible && (
            <div className="dropdown-menu">
              <button onClick={() => handleSort("highest salary")}>
                Highest Salary/Fee
              </button>
              <button onClick={() => handleSort("lowest salary")}>
                Lowest Salary/Fee
              </button>
              <button onClick={() => handleSort("latest")}>Latest</button>
              <button onClick={() => handleSort("oldest")}>Oldest</button>
            </div>
          )}
        </div>
        <button
          className="admin-add-button"
          onClick={() => setShowForm(true)}
        >
          + Add Jobs / Bootcamps
        </button>
      </div>

      <div className="jobs-section">
        <h2>Jobs</h2>
        <div className="job-cards">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <h3 className="job-title">{job.title}</h3>
              <p className="job-detail1">Salary: PKR {job.fee}</p>
              <p className="job-detail2">Location: {job.location}</p>
              <p className="job-detail3">
                <a href={job.companyLink} target="_blank" rel="noopener noreferrer">
                  Company LinkedIn
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bootcamps-section">
        <h2>Bootcamps</h2>
        <div className="bootcamp-cards">
          {bootcamps.map((bootcamp, index) => (
            <div className="job-card" key={index}>
              <h3 className="job-title">{bootcamp.title}</h3>
              <p className="job-detail1">Type: {bootcamp.type}</p>
              <p className="job-detail2">Fee: PKR {bootcamp.fee}</p>
              <p className="job-detail3">
                Start Date: {bootcamp.startDate || "N/A"}
              </p>
              <p className="job-detail3">
                End Date: {bootcamp.endDate || "N/A"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <div className="form-overlay">
          {!formType ? (
            <div className="form-type-selection">
              <h2>What would you like to add?</h2>
              <button onClick={() => setFormType("job")}>Job</button>
              <button onClick={() => setFormType("bootcamp")}>Bootcamp</button>
            </div>
          ) : (
            <form className="add-bootcamp-form" onSubmit={handleAddEntry}>
              <h2 className="form-title">
                Add {formType === "job" ? "Job" : "Bootcamp"}
              </h2>
              <label>
                {formType === "job" ? "Job Title:" : "Bootcamp Name:"}
                <input type="text" name="title" required />
              </label>
              {formType === "job" && (
                <>
                  <label>
                    Salary:
                    <input type="number" name="salary" required />
                  </label>
                  <label>
                    Location:
                    <input type="text" name="location" required />
                  </label>
                  <label>
                    Company LinkedIn:
                    <input type="url" name="companyLink" />
                  </label>
                </>
              )}
              {formType === "bootcamp" && (
                <>
                  <label>
                    Type:
                    <input type="text" name="type" required />
                  </label>
                  <label>
                    Fee:
                    <input type="number" name="fee" required />
                  </label>
                  <label>
                    Start Date:
                    <input type="date" name="startDate" required />
                  </label>
                  <label>
                    End Date:
                    <input type="date" name="endDate" required />
                  </label>
                </>
              )}
              <button type="submit" className="form-submit-button">
                Add
              </button>
              <button
                type="button"
                className="form-cancel-button"
                onClick={() => {
                  setShowForm(false);
                  setFormType(null);
                }}
              >
                Cancel
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminJobsPage;


