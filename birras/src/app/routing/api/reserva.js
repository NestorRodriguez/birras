const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/reserva');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/reserva', Auth.isAuth, routing.all)
    .get('/reserva/:id_reserva', Auth.isAuth, routing.one)
    .post('/reserva', Auth.isAuth, routing.create)
    .put('/reserva/:id_reserva', Auth.isAuth, routing.update)
    .delete('/reserva/:id_reserva', Auth.isAuth, routing.destroy);

module.exports = router;
