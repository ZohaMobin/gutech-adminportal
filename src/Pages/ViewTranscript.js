import React, { useState } from "react";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Transcript from "./Transcript";
import "./ViewTranscript.css";

const TranscriptView = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    studentId: "",
    batch: "",
  });

  const [isTranscriptVisible, setIsTranscriptVisible] = useState(false);

  const handleInputChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleViewTranscript = () => {
    if (!studentData.name || !studentData.studentId || !studentData.batch) {
      alert("Please fill in all fields");
      return;
    }
    setIsTranscriptVisible(true);
  };

  const handleGoBack = () => {
    setIsTranscriptVisible(false);
  };

  return (
    <div className="transcript-page">
      <div className="main-content">
        <div className="transcript-container">
          {!isTranscriptVisible ? (
            <>
              <div className="transcript-header">
                <h1>Transcript of {studentData.name || "[student]"}</h1>
                <span className="batch-label">
                  [{studentData.batch || "Batch"}]
                </span>
              </div>

              <div className="transcript-form">
                <div className="form-group">
                  <label>Student Name</label>
                  <input
                    type="text"
                    name="name"
                    value={studentData.name}
                    onChange={handleInputChange}
                    placeholder="Enter student name"
                  />
                </div>
                <div className="form-group">
                  <label>Student ID</label>
                  <input
                    type="text"
                    name="studentId"
                    value={studentData.studentId}
                    onChange={handleInputChange}
                    placeholder="Enter student ID"
                  />
                </div>
                <div className="form-group">
                  <label>Batch</label>
                  <input
                    type="text"
                    name="batch"
                    value={studentData.batch}
                    onChange={handleInputChange}
                    placeholder="Enter batch"
                  />
                </div>
                <button
                  className="view-transcript-btn"
                  onClick={handleViewTranscript}
                >
                  <FileText size={20} />
                  <Link to="#">View Transcript</Link>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="transcript-preview">
                <Transcript />
              </div>
              <button className="back-btn" onClick={handleGoBack}>
                Go Back
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TranscriptView;
