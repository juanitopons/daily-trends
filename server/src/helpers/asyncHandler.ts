import * as log4js from 'log4js';

export default (fn) => (
  req,
  res,
  next = log4js.getLogger(`app-${process.env.NODE_ENV}`).error,
) =>
  Promise.resolve(fn(req, res, next)).catch((err) => {
    next(err);
    res.status(500).send({ error: 'Error!' });
  });
