const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/motivo');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/motivo', Auth.isAuth, routing.all)
    .get('/motivo/:id_motivo', Auth.isAuth, routing.one)
    .post('/motivo', Auth.isAuth, routing.create)
    .put('/motivo/:id_motivo', Auth.isAuth, routing.update)
    .delete('/motivo/:id_motivo', Auth.isAuth, routing.destroy);

module.exports = router;
