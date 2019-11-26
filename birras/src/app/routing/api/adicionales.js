const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/adicionales');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/adicionales', Auth.isAuth, routing.all)
    .get('/adicionales/:id_adicionales', Auth.isAuth, routing.one)
    .post('/adicionales', Auth.isAuth, routing.create)
    .put('/adicionales/:id_adicionales', Auth.isAuth, routing.update)
    .delete('/adicionales/:id_adicionales', Auth.isAuth, routing.destroy);

module.exports = router;
