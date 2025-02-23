import React from "react";
import './Statistics.css';

function Statistics () {
    const enrolledStudents = 56;
    const pendingFees = 21;
    const attendance = 82;

    return (
        <div className="main-statistics-div">
            <div className="single-stat-div">
                <div className="left-section">
                    <img style={{height: 40, width: 40}} src='stat-icon-1.svg' alt="Icon not found"/>
                </div>
                <div className="right-section">
                    <div className="stat-div-title">Total Enrolled Students</div>
                    <div className="stat-div-figure">{enrolledStudents}</div>
                </div>
            </div>
            <div className="single-stat-div">
                <div className="left-section">
                    <img style={{height: 40, width: 40}} src='stat-icon-2.svg' alt="Icon not found"/>
                </div>
                <div className="right-section">
                    <div className="stat-div-title">Pending Fee Payments</div>
                    <div className="stat-div-figure">{pendingFees}</div>
                </div>
            </div>
            <div className="single-stat-div">
                <div className="left-section">
                    <img style={{height: 45, width: 45}} src='stat-icon-3.svg' alt="Icon not found"/>
                </div>
                <div className="right-section">
                    <div className="stat-div-title">Attendance Percentage</div>
                    <div className="stat-div-figure">{attendance}%</div>
                </div>
            </div>
        </div>
    );
}

export default Statistics;