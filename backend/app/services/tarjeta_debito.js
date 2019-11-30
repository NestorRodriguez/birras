const Database = require('../../app/database');
const Model = Database.import('../models/tarjeta_debito');
const Service = require('./service');

class TarjetaDebitoService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id_tarjeta_debito", "nombre_titular", "numero_tarjeta","codigo_seguridad","fecha_vencimiento"]
            },
            one: {
                attributes: ["id_tarjeta_debito", "nombre_titular", "numero_tarjeta","codigo_seguridad","fecha_vencimiento"]
            },
            all: {
                attributes: ["id_tarjeta_debito", "nombre_titular", "numero_tarjeta","codigo_seguridad","fecha_vencimiento"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = TarjetaDebitoService;
