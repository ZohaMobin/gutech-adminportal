import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClassFeeRecords from "./Pages/Group1-Fees/ClassFeeRecords";
import StudentFeeHistory from "./Pages/Group1-Fees/StudentFeeHistory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClassFeeRecords />} />
        <Route path="/fees/student/:name" element={<StudentFeeHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
