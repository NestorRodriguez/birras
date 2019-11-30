/**
 * Implementación de la ruta: /api/v1.0/profiles
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/profile');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/profiles',  routing.all)
    .get('/profiles/:id',  routing.one)
    .post('/profiles',  routing.create)
    .put('/profiles/:id',  routing.update)
    .delete('/profiles/:id',  routing.destroy);

module.exports = router;
