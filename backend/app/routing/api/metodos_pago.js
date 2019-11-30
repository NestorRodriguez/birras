const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/metodos_pago');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/metodos_pago',  routing.all)
    .get('/metodos_pago/:id_metodos_pago',  routing.one)
    .post('/metodos_pago',  routing.create)
    .put('/metodos_pago/:id_metodos_pago',  routing.update)
    .delete('/metodos_pago/:id_metodos_pago',  routing.destroy);

module.exports = router;
