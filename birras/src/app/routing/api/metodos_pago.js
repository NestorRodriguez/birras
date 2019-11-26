const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/metodos_pago');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/metodos_pago', Auth.isAuth, routing.all)
    .get('/metodos_pago/:id_metodos_pago', Auth.isAuth, routing.one)
    .post('/metodos_pago', Auth.isAuth, routing.create)
    .put('/metodos_pago/:id_metodos_pago', Auth.isAuth, routing.update)
    .delete('/metodos_pago/:id_metodos_pago', Auth.isAuth, routing.destroy);

module.exports = router;
