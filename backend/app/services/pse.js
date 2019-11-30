const Database = require('../../app/database');
const Model = Database.import('../models/pse');
const Service = require('./service');

class PseService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id_pse", "banco", "nombre_titular","tipo_persona"]
            },
            one: {
                attributes: ["id_pse", "banco", "nombre_titular","tipo_persona"]
            },
            all: {
                attributes: ["id_pse", "banco", "nombre_titular","tipo_persona"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = PseService;
