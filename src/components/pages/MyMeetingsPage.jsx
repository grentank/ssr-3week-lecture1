import React from 'react';
import MeetingCard from '../ui/MeetingCard';

export default function MyMeetingsPage({ allMeetings, setAllMeetings, currentStudent }) {
  return (
    <div className="row justify-content-start">
      {allMeetings
        .filter((meeting) => meeting.Student.id === currentStudent.id)
        .map((meeting) => (
          <MeetingCard
            currentStudent={currentStudent}
            key={meeting.id}
            meeting={meeting}
            setAllMeetings={setAllMeetings}
          />
        ))}
    </div>
  );
}
