const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/registrate');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/registrate', Auth.isAuth, routing.all)
    .get('/registrate/:id_registro', Auth.isAuth, routing.one)
    .post('/registrate', Auth.isAuth, routing.create)
    .put('/registrate/:id_registro', Auth.isAuth, routing.update)
    .delete('/registrate/:id_registro', Auth.isAuth, routing.destroy);

module.exports = router;
