const Controller = require('./controller');
const Service = require('../services/metodos_pago');

class MetodosPagoController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = MetodosPagoController;