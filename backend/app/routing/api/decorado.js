const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/decorado');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/decorado',  routing.all)
    .get('/decorado/:id_decorado',  routing.one)
    .post('/decorado',  routing.create)
    .put('/decorado/:id_decorado',  routing.update)
    .delete('/decorado/:id_decorado',  routing.destroy);

module.exports = router;
