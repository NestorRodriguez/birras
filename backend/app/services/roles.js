const Database = require('../../app/database');
const Model = Database.import('../models/roles');
const Service = require('./service');

class ProfileService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id_roles", "roles"]
            },
            one: {
                attributes: ["id_roles", "roles"]
            },
            all: {
                attributes: ["id_roles", "roles"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = ProfileService;
