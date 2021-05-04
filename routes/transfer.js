const { Router } = require("express");
const { check } = require("express-validator");
const { crearDestinatario, getDestinatarios } = require("../controllers/destinatario");
const { crearTransferencia, getTransferencias } = require("../controllers/transferencia");
const { crearUsuario, login, revalidarToken } = require("../controllers/users");
const { validarJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require('../middlewares/validator');



const router = Router();

router.post('/crearUsuario', [
    check('email', 'El email debe ser correcto').isEmail(),
    check('email', 'El email debe ser correcto').not().isEmpty(),
    check('rut', 'El rut es obligatorio').not().isEmpty(),
    check('password', 'El password es Obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es Obligatorio').not().isEmpty(),
    validarCampos
],crearUsuario);

router.post('/login', [
    check('rut', 'El rut es obligatorio').not().isEmpty(),
    check('password', 'El password es Obligatorio').not().isEmpty(),
    validarCampos
],login);

router.get( '/renew', validarJWT , revalidarToken );

router.post('/crearDestinatario', [
    check('rutCliente', 'El rut del cliente es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('rut', 'El rut del destinatario es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'El email debe ser correcto').isEmail(),
    check('telefono', 'El telefono es obligatorio').not().isEmpty(),
    check('bancoDestinatario', 'El bancoDestinatario es obligatorio').not().isEmpty(),
    check('tipoCuenta', 'El tipoCuenta es obligatorio').not().isEmpty(),
    check('numeroCuenta', 'El numeroCuenta es obligatorio').not().isEmpty(),
    validarJWT
], crearDestinatario);

router.get('/getDestinatario/:rutCliente?', [
    validarJWT
], getDestinatarios);

router.post('/crearTransferencia', [
    check('rutCliente', 'El rut del cliente es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('rut', 'El rut del destinatario es obligatorio').not().isEmpty(),
    check('bancoDestinatario', 'El bancoDestinatario es obligatorio').not().isEmpty(),
    check('tipoCuenta', 'El tipoCuenta es obligatorio').not().isEmpty(),
    check('monto', 'El monto es obligatorio').not().isEmpty(),
    validarJWT
], crearTransferencia);

router.get('/getTransferencias/:rutCliente?', [
    validarJWT
], getTransferencias);

module.exports = router;