const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/roles');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/roles',  routing.all)
    .get('/roles/:id_roles',  routing.one)
    .post('/roles',  routing.create)
    .put('/roles/:id_roles',  routing.update)
    .delete('/roles/:id_roles',  routing.destroy);

module.exports = router;
