import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminJobsPage from "./Pages/JobsAndBootcamps";
import './Pages/JobsndBootcamps.css';
function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<AdminJobsPage />} />
        </Routes>
    </Router>
    </div>
  );
};
export default App;
