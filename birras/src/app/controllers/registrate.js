const Controller = require('./controller');
const Service = require('../services/registrate');

class RegistrateController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = RegistrateController;