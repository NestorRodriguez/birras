const Database = require('../../app/database');
const Model = Database.import('../models/registrate');
const Service = require('./service');

class RegistrateService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id_registro", "Nombres", "Apellidos","Cedula","fecha_nacimiento","Direccion","id_usuario"]
            },
            one: {
                attributes: ["id_registro", "Nombres", "Apellidos","Cedula","fecha_nacimiento","Direccion","id_usuario"]
            },
            all: {
                attributes: ["id_registro", "Nombres", "Apellidos","Cedula","fecha_nacimiento","Direccion","id_usuario"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = RegistrateService;
