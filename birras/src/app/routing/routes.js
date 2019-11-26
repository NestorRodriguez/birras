
const adicionales = require('./api/adicionales');
const bares = require('./api/bares');
const decorado = require('./api/decorado');
const metodos_pago = require('./api/metodos_pago');
const motivo = require('./api/motivo');
const pse = require('./api/pse');
const query = require('./api/query');
const registrate = require('./api/registrate');
const reserva = require('./api/reserva');
const roles = require('./api/roles');
const tarjeta_credito = require('./api/tarjeta_credito');
const tarjeta_debito = require('./api/tarjeta_debito');
const usuarios = require('./api/usuarios');


module.exports = [
    adicionales,
    bares,
    decorado,
    metodos_pago,
    motivo,
    pse,
    query,
    registrate,
    reserva,
    roles,
    tarjeta_credito,
    tarjeta_debito,
    usuarios    
];
