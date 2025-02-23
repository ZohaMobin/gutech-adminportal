
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TranscriptView from './Pages/ViewTranscript';
// import { BrowserRouter } from 'react-router-dom';
import Examschedule from './Components/ExamSchedule/Examschedule';

import Fees1 from "./Pages/Group1-Fees/Fees1";
import StudentFeeHistory from "./Pages/Group1-Fees/StudentFeeHistory";
import FeeVoucher from "./Pages/Group1-Fees/FeeVoucher";
import AdminJobsPage from "./Pages/JobsAndBootcamps/JobsAndBootcamps";
import "./App.css";

import Sidebar from "../src/Pages/Sidebar/sidebar/index";

import AdminEventCalendar from "./Pages/Event Calendar/Event Calendar";
import Announcement from "./Pages/Announcements/Announcement";
import Dashboard from "./Pages/dashboard/Dashboard.jsx";
import ClassSchedule from "./Pages/Class Schedule/Class Schedule.jsx";
import { Topbar } from "./Pages/topbar/topbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="mainContent ">
          <Topbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/calendar" element={<AdminEventCalendar />} />
              <Route path="/Announcement" element={<Announcement />} />

              <Route path="/Class Schedule" element={<ClassSchedule />} />

              <Route path="/Fees1" element={<Fees1 />} />
              <Route
                path="/student-fee-history/:name"
                element={<StudentFeeHistory />}
              /> <Route path="/JobsAndBootcamps" element={<AdminJobsPage />} />
              <Route path="/FeeVoucher" element={<FeeVoucher />} />
              <Route path="/Transcript" element={  <TranscriptView />} />
              <Route path="/Examschedule" element={           <Examschedule />} />

           
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )}
 



// import './Components/ExamSchedule/Examschedule.css';


export default App;
