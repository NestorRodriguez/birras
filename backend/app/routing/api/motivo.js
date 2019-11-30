const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/motivo');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/motivo',  routing.all)
    .get('/motivo/:id_motivo',  routing.one)
    .post('/motivo',  routing.create)
    .put('/motivo/:id_motivo',  routing.update)
    .delete('/motivo/:id_motivo',  routing.destroy);

module.exports = router;
