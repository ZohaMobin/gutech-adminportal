import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*import ClassFeeRecords from "./Pages/Group1-Fees/ClassFeeRecords";*/

import Fees1 from "./Pages/Group1-Fees/Fees1";
import StudentFeeHistory from "./Pages/Group1-Fees/StudentFeeHistory";
import FeeVoucher from "./Pages/Group1-Fees/FeeVoucher";
import './App.css';
import Sidebar from "../src/Pages/Sidebar/sidebar/index";
import Assignments from './Pages/assignments/assignments';

import Dashboard from './Pages/dashboard/dashboard';
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
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/Fees" element={<Fees1/>}/>
          <Route path="/student-fee-history/:name" element={<StudentFeeHistory />} />    
          <Route path="/feeVoucher" element={<FeeVoucher/>}/>






        </Routes>
        </div>
        </div>
      </div>

    </Router>
  );
}

export default App;




