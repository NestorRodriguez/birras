const Controller = require('./controller');
const Service = require('../services/adicionales');

class AdicionalesController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = AdicionalesController;