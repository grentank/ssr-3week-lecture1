import express from 'express';
import template from '../template';
import { Mentor, Meeting, Student } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const mentors = await Mentor.findAll();
  // const meetings = await Meeting.findAll({
  //   include: [Mentor, Student],
  // });
  // console.log('------------>', mentors);
  res.send(template({
    path: req.originalUrl,
    sessionStudent: res.locals.sessionStudent,
    mentors,
    // meetings,
    // allMeetings
  }));
});

router.get('/mymeetings', async (req, res) => {
  const mentors = await Mentor.findAll();
  // const meetings = await Meeting.findAll({
  //   include: [Mentor, Student],
  // });
  // console.log('------------>', mentors);
  res.send(template({
    path: req.originalUrl,
    sessionStudent: res.locals.sessionStudent,
    mentors,
    // meetings,
    // allMeetings
  }));
});

export default router;
