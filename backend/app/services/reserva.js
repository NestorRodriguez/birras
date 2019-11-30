const Database = require('../../app/database');
const Model = Database.import('../models/reserva');
const Service = require('./service');

class ReservaService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id_reserva", "id_bares", "Numero_personas","horario_ingreso","horario_salida","id_motivo","Dedicatoria","id_decorado","id_adicionales","Nombre_festejado","id_metodos_pago"]
            },
            one: {
                attributes: ["id_reserva", "id_bares", "Numero_personas","horario_ingreso","horario_salida","id_motivo","Dedicatoria","id_decorado","id_adicionales","Nombre_festejado","id_metodos_pago"]
            },
            all: {
                attributes: ["id_reserva", "id_bares", "Numero_personas","horario_ingreso","horario_salida","id_motivo","Dedicatoria","id_decorado","id_adicionales","Nombre_festejado","id_metodos_pago"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = ReservaService;
