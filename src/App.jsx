import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FormHandle from './Files/FormHandle';
import Home from './Files/Home'; 
import Signup from './Files/Signup';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/" element={<FormHandle />} />

          
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        {/* ToastContainer ko yahan rakhna bilkul sahi hai */}
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;