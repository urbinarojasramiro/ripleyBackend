const { Schema, model } = require("mongoose");


const DestinatarioSchema = Schema({
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
    email: {
        type: String,
        required: true
    },
    telefono: {
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
    numeroCuenta: {
        type: Number,
        required: true
    }
});

module.exports = model('Destinatario', DestinatarioSchema);