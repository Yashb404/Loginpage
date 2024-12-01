import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignupLogin from './Components/SignupLogin/SignupLogin';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignupLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;