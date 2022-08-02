import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ setCurrentStudent }) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    nickname: '',
    password: '',
  });
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('/api/v1/login', input)
      .then((res) => {
        setCurrentStudent(res.data); // Устанавливаем того самого студента с бекэнда
        navigate('/');
      })
      .catch(() => setError(true));
  };
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="row justify-content-center">
      <div className="col-5">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="loginNickname" className="form-label">Nickname</label>
            <input
              value={input.nickname}
              onChange={changeHandler}
              type="text"
              name="nickname"
              className="form-control"
              id="loginNickname"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">Password</label>
            <input
              value={input.password}
              onChange={changeHandler}
              type="password"
              name="password"
              className="form-control"
              id="loginPassword"
            />
          </div>
          <div className="row justify-content-center mt-3">
            <button type="submit" className="btn btn-outline-success">Login</button>
            {error && <div style={{ color: 'red', background: 'yellow' }}>Password is incorrect</div>}
          </div>
        </form>
      </div>
    </div>
  );
}
