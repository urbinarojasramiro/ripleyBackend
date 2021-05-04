const { Schema, model } = require("mongoose");


const TransferenciaSchema = Schema({
    rutCliente: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    rut: {
        type: String,
        required: true
    },
    bancoDestino: {
        type: String,
        required: true
    },
    tipoCuenta: {
        type: String,
        required: true
    },
    monto: {
        type: Number,
        required: true
    }
});

module.exports = model('Transferencia', TransferenciaSchema);