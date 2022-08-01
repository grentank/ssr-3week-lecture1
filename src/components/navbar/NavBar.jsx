import React from 'react';
import PrivateNavbar from './PrivateNavbar';
import PublicNavbar from './PublicNavbar';

export default function NavBar({ currentStudent, setCurrentStudent }) {
  // console.log('Current navbar student', currentStudent);
  return (
    <>
      { currentStudent.id
        ? <PrivateNavbar currentStudent={currentStudent} setCurrentStudent={setCurrentStudent} />
        : <PublicNavbar />}
    </>
  );
}
