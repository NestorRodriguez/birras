const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/tarjeta_credito');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/tarjeta_credito',  routing.all)
    .get('/tarjeta_credito/:id_tarjeta_credito',  routing.one)
    .post('/tarjeta_credito',  routing.create)
    .put('/tarjeta_credito/:id_tarjeta_credito',  routing.update)
    .delete('/tarjeta_credito/:id_tarjeta_credito',  routing.destroy);

module.exports = router;
