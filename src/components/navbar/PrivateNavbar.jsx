import axios from 'axios';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

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
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">My meetings</a>
            </li>
            Hello,
            {' '}
            {currentStudent.name}
            {' '}
          </ul>
          <button onClick={logoutHandler} type="button" className="btn btn-outline-secondary m-2">Logout</button>
        </div>
      </div>
    </nav>
  );
}
