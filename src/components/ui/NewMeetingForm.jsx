import axios from 'axios';
import React, { useState } from 'react';
import currentDate from '../utils/currentDate';

export default function NewMeetingForm({ mentors, setAllMeetings }) { // setAllMeetings пришёл из AllMeetingsPage
  const [formInput, setFormInput] = useState({
    meetingTime: currentDate(),
    selectMentor: `${mentors[0].id}`,
  });
  const newFormSubmitHandler = (e) => {
    e.preventDefault();
    axios.post('/api/v1/meetings', formInput)
      .then((res) => setAllMeetings((prev) => [...prev, res.data])); // устанавливаем новый массив всех встреч
    // .catch(() => )
  };
  const changeHandler = (e) => setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  console.log(formInput);
  return (
    <div className="row justify-content-center m-5">
      <div className="col-5">
        <form onSubmit={newFormSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="meeting-time" className="form-label">Choose a meeting time slot</label>
            <input
              type="datetime-local"
              id="meeting-time"
              className="form-control"
              name="meetingTime"
              step={1200}
              value={formInput.meetingTime}
              onChange={changeHandler}
              min="2022-08-02T00:00"
              max="2022-08-30T00:00"
            />
          </div>
          <label htmlFor="selectMentor" className="form-label">Select a mentor</label>
          <select
            onChange={changeHandler}
            value={formInput.selectMentor}
            name="selectMentor"
            className="form-select"
            aria-label="Default select example"
            id="selectMentor"
          >
            {/* <option selected>Open this select menu</option> */}
            {mentors.map((mentor) => (
              <option
                name="selectMentor"
                key={mentor.id}
                value={mentor.id}
              >
                {mentor.name}
              </option>
            ))}
          </select>
          <div className="row justify-content-center mt-3">
            <button type="submit" className="btn btn-outline-success">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
