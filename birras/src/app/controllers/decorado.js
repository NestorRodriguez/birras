const Controller = require('./controller');
const Service = require('../services/decorado');

class DecoradoController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = DecoradoController;