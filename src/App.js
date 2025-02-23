import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from "./Pages/Sidebar/sidebar/index";
import AdminEventCalendar from './Pages/Event Calendar/Event Calendar';
import Announcement from "./Pages/Announcements/Announcement";
import Dashboard from './Pages/dashboard/Dashboard.jsx';
import ClassSchedule from './Pages/Class Schedule/Class Schedule.jsx' ; 
import { Topbar } from './Pages/topbar/topbar';

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
  
          <Route path="/calendar" element={<AdminEventCalendar />}/>
          <Route path="/Announcement" element={<Announcement/>} /> 
         
          <Route path="/Class Schedule" element={<ClassSchedule/>} /> 
        </Routes>
        </div>
        </div>
      </div>
    </Router>



  );
}

export default App;



