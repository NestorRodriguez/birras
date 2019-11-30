const Controller = require('./controller');
const Service = require('../services/bares');

class BaresController extends Controller {

    constructor(){
        super(Service);
    }
}

module.exports = BaresController;