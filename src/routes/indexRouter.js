import express from 'express';
import template from '../template';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(template({ path: req.originalUrl, sessionStudent: res.locals.sessionStudent }));
});

export default router;
