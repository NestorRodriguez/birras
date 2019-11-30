const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/tarjeta_debito');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/tarjeta_debito',  routing.all)
    .get('/tarjeta_debito/:id_tarjeta_debito',  routing.one)
    .post('/tarjeta_debito',  routing.create)
    .put('/tarjeta_debito/:id_tarjeta_debito',  routing.update)
    .delete('/tarjeta_debito/:id_tarjeta_debito',  routing.destroy);

module.exports = router;
