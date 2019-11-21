const Database = require('../../app/database');
const Model = Database.import('../models/tarjeta_credito');
const Service = require('./service');

class TarjetaCreditoService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id_decorado", "decorado"]
            },
            one: {
                attributes: ["id_decorado", "decorado"]
            },
            all: {
                attributes: ["id_decorado", "decorado"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = TarjetaCreditoService;
