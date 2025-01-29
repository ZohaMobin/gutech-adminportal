import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./Pages/Sidebar/sidebar/index";
import Assignments from "./Pages/assignments/assignments";
import Dashboard from './Pages/dashboard/dashboard';
import { Topbar } from "./Pages/topbar/topbar";
import AnnouncementsPage from './Pages/Announcements/Announcement';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className='mainContent '>
          <Topbar />
          <div className="routes-content" > 
          <Routes >
          <Route path='/Announcement' element={<AnnouncementsPage />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/assignments" element={<Assignments/>} />

        </Routes>
        </div>
      </div>
    </div>
    </Router >
  );
}

export default App;


