const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/reserva');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/reserva',  routing.all)
    .get('/reserva/:id_reserva',  routing.one)
    .post('/reserva',  routing.create)
    .put('/reserva/:id_reserva',  routing.update)
    .delete('/reserva/:id_reserva',  routing.destroy);

module.exports = router;
