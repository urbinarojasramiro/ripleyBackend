const define = (name, value) => {

    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });

}

define("ERROR_GENERAL", 'Por favor comuníquese con el Administrador');
define("ERROR_USUARIO_EXISTE", 'El usuario ya existe');
define("ERROR_TOKEN", 'Error al validar token');
define("ERROR_USUARIO_NO_EXISTE", 'Error, el usuario no existe');
define("ERROR_PASSWORD", 'Error, credenciales incorrectas');
define("ERROR_DESTINATARIO_EXISTE", 'El destinatario ya existe');

define("SUCCESS_LOGIN", 'Login correcto');
define("SUCCESS_USUARIO_CREADO", 'El usuario se ha creado correctamente');
define("SUCCESS_DESTINATARIO_CREADO", 'El destinatario se ha creado correctamente');
define("SUCCESS_TRANSFERENCIA", 'Transferencia exitosa');

define("DESTINATARIOS_NOT_FOUND", 'El usuario no tiene destinatarios');
define("TRANSFERENCIAS_NOT_FOUND", 'El usuario no tiene transferencias');