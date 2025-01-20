import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "../src/pages/Sidebar/sidebar/index";
import Assignments from './pages/assignments/assignments';

import Dashboard from './pages/dashboard/dashboard';
import { Topbar } from './pages/topbar/topbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className='mainContent '>
  <Topbar/>
        <Routes>

          <Route path="/" element={<Dashboard/>} /> 
          <Route path="/assignments" element={<Assignments />} />
      
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



