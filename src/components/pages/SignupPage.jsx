import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    nickname: '',
    name: '',
    password: '',
  });
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('/api/v1/students', input)
      .then(() => navigate('/'))
      .catch(() => setError(true));
  };
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        SIGN UP:
      </div>
      <div className="mb-3">
        <label htmlFor="signupNickname" className="form-label">Nickname</label>
        <input
          value={input.nickname}
          onChange={changeHandler}
          type="text"
          name="nickname"
          className="form-control"
          id="signupNickname"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="signupName" className="form-label">Actual name</label>
        <input
          value={input.name}
          onChange={changeHandler}
          type="text"
          name="name"
          className="form-control"
          id="signupName"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="signupPassword" className="form-label">Password</label>
        <input
          value={input.password}
          onChange={changeHandler}
          type="password"
          name="password"
          className="form-control"
          id="signupPassword"
        />
      </div>
      <button type="submit" className="btn btn-primary">Sign up</button>
      {error && <div style={{ color: 'red' }}>This nickname already exists</div>}
    </form>
  );
}
