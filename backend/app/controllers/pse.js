const Controller = require('./controller');
const Service = require('../services/pse');

class PseController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = PseController;