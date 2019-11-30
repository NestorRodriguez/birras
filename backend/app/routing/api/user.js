/**
 * Implementación de la ruta: /api/v1.0/users
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/user');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/users',  routing.all)
    .get('/users/:id',  routing.one)
    .post('/users',  routing.create)
    .post('/users/login', routing.login)
    .put('/users/:id',  routing.update)
    .delete('/users/:id',  routing.destroy);

module.exports = router;
