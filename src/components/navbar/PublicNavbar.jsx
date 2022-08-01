import React from 'react';
import { NavLink } from 'react-router-dom';

export default function PublicNavbar() {
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
          </ul>
          <NavLink to="/signup" className="btn btn-success m-2"><strong>Sign Up</strong></NavLink>
          <NavLink to="/login" className="btn btn-outline-success m-2">Login</NavLink>
        </div>
      </div>
    </nav>
  );
}
