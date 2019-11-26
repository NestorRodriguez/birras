const Database = require('../../app/database');
const Model = Database.import('../models/adicionales');
const Service = require('./service');

class AdicionalesService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id_adicionales", "adicionales","precio"]
            },
            one: {
                attributes: ["id_adicionales", "adicionales","precio"]
            },
            all: {
                attributes: ["id_adicionales", "adicionales","precio"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = AdicionalesService;
