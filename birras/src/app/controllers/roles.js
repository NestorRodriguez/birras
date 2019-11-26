const Controller = require('./controller');
const Service = require('../services/roles');

class RolesController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = RolesController;
