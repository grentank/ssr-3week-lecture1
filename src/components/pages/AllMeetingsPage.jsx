import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MeetingCard from '../ui/MeetingCard';
import NewMeetingForm from '../ui/NewMeetingForm';

export default function AllMeetingsPage({
  mentors,
  currentStudent,
  setAllMeetings,
  allMeetings,
}) {
  // useEffect(() => {
  //   axios.get('/api/v1/meetings')
  //     .then((res) => setAllMeetings(res.data));
  // }, []);
  return (
    <div>
      <div className="row justify-content-center">
        {' '}
        {/* Перекидываем пропсами функцию в форму, чтобы там была возможность добавить новый meeting */}
        {currentStudent.id && <NewMeetingForm setAllMeetings={setAllMeetings} mentors={mentors} />}
      </div>
      <div className="row justify-content-start">
        {allMeetings.map((meeting) => (
          <MeetingCard
            currentStudent={currentStudent}
            key={meeting.id}
            meeting={meeting}
            setAllMeetings={setAllMeetings}
          />
        ))}
      </div>
    </div>
  );
}
