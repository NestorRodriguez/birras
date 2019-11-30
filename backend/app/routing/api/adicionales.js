const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/adicionales');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/adicionales', routing.all)
    .get('/adicionales/:id_adicionales', routing.one)
    .post('/adicionales', routing.create)
    .put('/adicionales/:id_adicionales', routing.update)
    .delete('/adicionales/:id_adicionales', routing.destroy);

module.exports = router;
