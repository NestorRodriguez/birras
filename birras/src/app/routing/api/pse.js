const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/pse');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/pse', Auth.isAuth, routing.all)
    .get('/pse/:id_pse', Auth.isAuth, routing.one)
    .post('/pse', Auth.isAuth, routing.create)
    .put('/pse/:id_pse', Auth.isAuth, routing.update)
    .delete('/pse/:id_pse', Auth.isAuth, routing.destroy);

module.exports = router;
