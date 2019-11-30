const Database = require('../../app/database');
const Model = Database.import('../models/metodos_pago');
const Service = require('./service');

class MetodosPagoService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id_metodos_pago", "metodo"]
            },
            one: {
                attributes: ["id_metodos_pago", "metodo"]
            },
            all: {
                attributes: ["id_metodos_pago", "metodo"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = MetodosPagoService;
