import axios from 'axios';
import React from 'react';
import parseTime from '../utils/parseTime';

export default function MeetingCard({ meeting, setAllMeetings, currentStudent }) {
  const deleteHandler = () => {
    axios.delete(`/api/v1/meetings/${meeting.id}`)
      .then(() => setAllMeetings((prev) => prev.filter((el) => el.id !== meeting.id)));
  };
  return (
    <div className="col">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{parseTime(meeting.beginTime)}</h5>
          <p className="card-text">{`${meeting.Student.name} записался к ${meeting.Mentor.name}`}</p>
          {meeting.Student.id === currentStudent.id && (
          <button
            type="button"
            onClick={deleteHandler}
            className="btn btn-outline-warning"
          >
            Delete
          </button>
          )}
        </div>
      </div>
    </div>
  );
}
