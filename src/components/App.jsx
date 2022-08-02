import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import AllMeetingsPage from './pages/AllMeetingsPage';
import LoginPage from './pages/LoginPage';
import MyMeetingsPage from './pages/MyMeetingsPage';
import SignupPage from './pages/SignupPage';

export default function App({ sessionStudent, mentors/* , meetings */ }) {
  const [currentStudent, setCurrentStudent] = useState(sessionStudent || {});
  const [allMeetings, setAllMeetings] = useState(/* meetings || */ []);
  useEffect(() => {
    axios.get('/api/v1/meetings')
      .then((res) => setAllMeetings(res.data));
  }, []);
  return (
    <div className="container">
      <div className="row">
        <NavBar currentStudent={currentStudent} setCurrentStudent={setCurrentStudent} />
        <img src="https://news2.ru/user_images/236355/610029_1599328063.jpg" />
        {currentStudent.id
          ? (
            <Routes>
              <Route path="/" element={<AllMeetingsPage setAllMeetings={setAllMeetings} allMeetings={allMeetings} currentStudent={currentStudent} mentors={mentors} />} />
              <Route path="/mymeetings" element={<MyMeetingsPage setAllMeetings={setAllMeetings} allMeetings={allMeetings} currentStudent={currentStudent} />} />
            </Routes>
          )
          : (
            <Routes>
              <Route path="/" element={<AllMeetingsPage setAllMeetings={setAllMeetings} allMeetings={allMeetings} currentStudent={currentStudent} mentors={mentors} />} />
              <Route path="/login" element={<LoginPage setCurrentStudent={setCurrentStudent} />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          )}
      </div>
    </div>
  );
}
