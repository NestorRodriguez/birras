const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/tarjeta_credito');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/tarjeta_credito', Auth.isAuth, routing.all)
    .get('/tarjeta_credito/:id_tarjeta_credito', Auth.isAuth, routing.one)
    .post('/tarjeta_credito', Auth.isAuth, routing.create)
    .put('/tarjeta_credito/:id_tarjeta_credito', Auth.isAuth, routing.update)
    .delete('/tarjeta_credito/:id_tarjeta_credito', Auth.isAuth, routing.destroy);

module.exports = router;
