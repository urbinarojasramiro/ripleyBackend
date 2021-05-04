const { response } = require("express");
const constantes = require('../utils/constantes');
const Transferencia = require('../models/transferencia');

const crearTransferencia = async( req, res = response) => {


    try{
        
        const dbTransferencia = new Transferencia( req.body );

        await dbTransferencia.save();

        return res.status(200).json({
            ok: true,
            message: constantes.SUCCESS_TRANSFERENCIA
        });

    }catch ( error ){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: constantes.ERROR_GENERAL
        });
    }
}

const getTransferencias = async( req, res = response) => {

    const { rutCliente } = req.query;

    try{

        const transferencias = await Transferencia.find({ 'rutCliente': rutCliente });


        if( transferencias.length == 0 ){
            return res.status(404).json({
                ok: false,
                message: constantes.TRANSFERENCIAS_NOT_FOUND
            });
        }

        return res.status(200).json({
            ok: true,
            data: transferencias
        });

    }catch ( error ){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: constantes.ERROR_GENERAL
        });
    }
}

module.exports = {
    crearTransferencia,
    getTransferencias
}