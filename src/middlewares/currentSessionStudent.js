export default function currentSessionStudent(req, res, next) {
  const sessionStudent = {
    id: req.session?.studentId,
    name: req.session?.studentName,
    nickname: req.session?.nickname,
  };
  res.locals.sessionStudent = sessionStudent;
  next();
}
