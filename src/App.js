import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*import ClassFeeRecords from "./Pages/Group1-Fees/ClassFeeRecords";*/
import StudentFeeHistory from "./Pages/Group1-Fees/StudentFeeHistory";
import FeeVoucher from "./Pages/Group1-Fees/FeeVoucher";
import Fees1 from "./Pages/Group1-Fees/Fees1";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/student-fee-history/:name" element={<StudentFeeHistory />} />        <Route path="/feeVoucher" element={<FeeVoucher/>}/>
      <Route path="/" element={<Fees1/>}/>
      </Routes>
    </Router>
  );
}

export default App;
