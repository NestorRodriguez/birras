const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/decorado');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/decorado', Auth.isAuth, routing.all)
    .get('/decorado/:id_decorado', Auth.isAuth, routing.one)
    .post('/decorado', Auth.isAuth, routing.create)
    .put('/decorado/:id_decorado', Auth.isAuth, routing.update)
    .delete('/decorado/:id_decorado', Auth.isAuth, routing.destroy);

module.exports = router;
