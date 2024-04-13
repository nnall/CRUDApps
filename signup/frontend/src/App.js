import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp"; // Make sure to provide the correct path to SignUp component

// import "./index.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
      </Routes>
      {/* Add more Route components for other pages as needed */}
    </Router>
  );
}

export default App;

//
