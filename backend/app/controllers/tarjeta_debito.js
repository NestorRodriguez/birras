const Controller = require('./controller');
const Service = require('../services/tarjeta_debito');

class TarjetaDebitoController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = TarjetaDebitoController;