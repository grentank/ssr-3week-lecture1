import axios from 'axios';
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function PrivateNavbar({ currentStudent, setCurrentStudent }) {
  const navigate = useNavigate();
  const logoutHandler = () => {
    axios.get('/api/v1/logout')
      .then(() => {
        setCurrentStudent({});
        navigate('/');
      });
  };
  return (

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Mentor scheduler</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mymeetings">Встречи студента: {currentStudent.name}</NavLink>
            </li>
          </ul>
          <div className="nav-item me-5">
            Hello,
            {' '}
            {currentStudent.name}
            {' '}
          </div>
          <button onClick={logoutHandler} type="button" className="btn btn-outline-secondary m-2">Logout</button>
        </div>
      </div>
    </nav>
  );
}
