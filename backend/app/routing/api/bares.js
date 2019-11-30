const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/bares');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/bares',  routing.all)
    .get('/bares/:id_bares',  routing.one)
    .post('/bares',  routing.create)
    .put('/bares/:id_bares',  routing.update)
    .delete('/bares/:id_bares',  routing.destroy);

module.exports = router;
