const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

routes.post('/posts', multer(multerConfig).single('file'), (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.file);
  return res.json({ status: `${req.file.filename}` });
});

module.exports = routes;
