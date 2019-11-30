const Controller = require('./controller');
const Service = require('../services/motivo');

class MotivoController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = MotivoController;