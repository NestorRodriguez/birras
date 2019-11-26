const Database = require('../../app/database');
const Model = Database.import('../models/tarjeta_credito');
const Service = require('./service');

class TarjetaCreditoService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id_decorado", "decorado","precio"]
            },
            one: {
                attributes: ["id_decorado", "decorado","precio"]
            },
            all: {
                attributes: ["id_decorado", "decorado","precio"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = TarjetaCreditoService;
