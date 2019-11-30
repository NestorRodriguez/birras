const Controller = require('./controller');
const Service = require('../services/tarjeta_credito');

class TarejetaCreditoController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = TarejetaCreditoController;