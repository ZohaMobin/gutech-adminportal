import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from "./Pages/Sidebar/sidebar/index";
import Assignments from './Pages/assignments/assignments';
import AdminEventCalendar from './Pages/Event Calendar/Event Calendar';
import Announcement from "./Pages/Announcements/Announcement";
import AdminJobsPage from "./Pages/JobsAndBootcamps/JobsAndBootcamps";
import Dashboard from './Pages/dashboard/dashboard';
import { Topbar } from './Pages/topbar/topbar';

import React from "react";
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className='mainContent '>
  <Topbar/>
  <div className='content'>
        <Routes >

          <Route path="/" element={<Dashboard/>} /> 
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/calendar" element={<AdminEventCalendar />}/>
          <Route path="/Announcement" element={<Announcement/>} /> 
          <Route path="/job-opportunities" element={<AdminJobsPage />} />
        </Routes>
        </div>
    </div>
    </div>
    </Router>
  );
};
export default App;



