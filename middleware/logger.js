const logger = (req, res, next) => {
  req.userId = "blabla";
  console.log(`${req.method} ${req.protocol}://${req.host}${req.originalUrl}`);
  next();
};

module.exports = logger;