import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import AllMeetingsPage from './pages/AllMeetingsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

export default function App({ sessionStudent }) {
  const [currentStudent, setCurrentStudent] = useState(sessionStudent || {});
  return (
    <div className="container">
      <div className="row">
        <NavBar currentStudent={currentStudent} setCurrentStudent={setCurrentStudent} />
        <Routes>
          <Route path="/" element={<AllMeetingsPage />} />
          <Route path="/login" element={<LoginPage setCurrentStudent={setCurrentStudent} />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </div>
  );
}
