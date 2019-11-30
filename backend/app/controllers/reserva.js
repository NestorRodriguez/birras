const Controller = require('./controller');
const Service = require('../services/reserva');

class ReservaController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = ReservaController;