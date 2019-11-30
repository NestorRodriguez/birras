const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/usuarios');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/usuarios',  routing.all)
    .get('/usuarios/:id_usuario',  routing.one)
    .post('/usuarios',  routing.create)
    .post('/usuarios/login', routing.login)
    .put('/usuarios/:id_usuario',  routing.update)
    .delete('/usuarios/:id_usuario',  routing.destroy);

module.exports = router;
