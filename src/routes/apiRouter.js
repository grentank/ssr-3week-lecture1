import express from 'express';
import bcrypt from 'bcrypt';
import template from '../template';
import { Student, Meeting, Mentor } from '../../db/models';
import copy from '../components/utils/copy';

const router = express.Router();

router.post('/students', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const [currentStudent, created] = await Student.findOrCreate({
    where: { nickname: req.body.nickname },
    defaults: {
      hashedPassword,
      name: req.body.name,
    },
  });
  if (!created) res.sendStatus(418);
  else res.sendStatus(200);
});

router.post('/login', async (req, res) => {
  const databaseStudent = await Student.findOne({
    where: {
      nickname: req.body.nickname,
    },
  });
  if (databaseStudent && await bcrypt.compare(req.body.password, databaseStudent.hashedPassword)) {
    // res.json({ ...databaseStudent, hashedPassword: undefined });
    const sessionData = {
      name: databaseStudent.name,
      nickname: databaseStudent.nickname,
      id: databaseStudent.id,
    };
    // Object.assign(req.session, sessionData);
    req.session.studentName = databaseStudent.name;
    req.session.nickname = databaseStudent.nickname;
    req.session.studentId = databaseStudent.id;
    res.json(sessionData);
  } else res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.sendStatus(200);
});

router.post('/meetings', async (req, res) => {
  const createdMeeting = await Meeting.create({
    studentId: req.session?.studentId,
    mentorId: parseInt(req.body.selectMentor),
    beginTime: req.body.meetingTime,
  });
  const newMeeting = await Meeting.findOne({
    where: {
      id: createdMeeting.id,
    },
    include: [Mentor, Student],
  });
  res.json(newMeeting);
});

router.get('/meetings', async (req, res) => {
  const allMeetings = await Meeting.findAll({
    include: [Mentor, Student],
    // добавили выемки из таблиц менторов и студентов вдобавок к встречам
  });
  res.json(allMeetings);
});

router.delete('/meetings/:id', async (req, res) => {
  await Meeting.destroy({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.sendStatus(200);
});

export default router;
