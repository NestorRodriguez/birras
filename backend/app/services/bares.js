const Database = require('../../app/database');
const Model = Database.import('../models/bares');
const Service = require('./service');

class BaresService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id_bares", "Nombre_establecimiento", "Direccion","Nit","Horarios","Descripcion","cantidad_mesa","Fotos","id_usuario"]
            },
            one: {
                attributes: ["id_bares", "Nombre_establecimiento", "Direccion","Nit","Horarios","Descripcion","cantidad_mesa","Fotos","id_usuario"]
            },
            all: {
                attributes: ["id_bares", "Nombre_establecimiento", "Direccion","Nit","Horarios","Descripcion","cantidad_mesa","Fotos","id_usuario"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = BaresService;
