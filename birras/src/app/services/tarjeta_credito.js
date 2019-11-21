const Database = require('../../app/database');
const Model = Database.import('../models/tarjeta_credito');
const Service = require('./service');

class TarjetaCreditoService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id_tarjeta_credito", "nombre_titular", "numero_tarjeta","codigo_seguridad","fecha_vencimiento","cuotas"]
            },
            one: {
                attributes: ["id_tarjeta_credito", "nombre_titular", "numero_tarjeta","codigo_seguridad","fecha_vencimiento","cuotas"]
            },
            all: {
                attributes: ["id_tarjeta_credito", "nombre_titular", "numero_tarjeta","codigo_seguridad","fecha_vencimiento","cuotas"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = TarjetaCreditoService;
