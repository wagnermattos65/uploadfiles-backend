const routes = require('express').Router();

routes.get('/', (req, res) => res.json({ hello: 'world' }));

module.exports = routes;
