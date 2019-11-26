const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/usuarios');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/usuarios', Auth.isAuth, routing.all)
    .get('/usuarios/:id_usuario', Auth.isAuth, routing.one)
    .post('/usuarios', Auth.isAuth, routing.create)
    .post('/usuarios/login', routing.login)
    .put('/usuarios/:id_usuario', Auth.isAuth, routing.update)
    .delete('/usuarios/:id_usuario', Auth.isAuth, routing.destroy);

module.exports = router;
