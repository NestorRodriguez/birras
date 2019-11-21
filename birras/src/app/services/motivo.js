const Database = require('../../app/database');
const Model = Database.import('../models/motivo');
const Service = require('./service');

class MotivoService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id_motivo", "motivo"]
            },
            one: {
                attributes: ["id_motivo", "motivo"]
            },
            all: {
                attributes: ["id_motivo", "motivo"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = MotivoService;
