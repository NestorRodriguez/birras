const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/registrate');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/registrate',  routing.all)
    .get('/registrate/:id_registro',  routing.one)
    .post('/registrate',  routing.create)
    .put('/registrate/:id_registro',  routing.update)
    .delete('/registrate/:id_registro',  routing.destroy);

module.exports = router;
