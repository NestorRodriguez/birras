const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/pse');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/pse',  routing.all)
    .get('/pse/:id_pse',  routing.one)
    .post('/pse',  routing.create)
    .put('/pse/:id_pse',  routing.update)
    .delete('/pse/:id_pse',  routing.destroy);

module.exports = router;
