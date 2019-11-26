const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/bares');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/bares', Auth.isAuth, routing.all)
    .get('/bares/:id_bares', Auth.isAuth, routing.one)
    .post('/bares', Auth.isAuth, routing.create)
    .put('/bares/:id_bares', Auth.isAuth, routing.update)
    .delete('/bares/:id_bares', Auth.isAuth, routing.destroy);

module.exports = router;
