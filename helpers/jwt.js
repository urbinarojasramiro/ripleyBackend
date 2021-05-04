const jwt = require('jsonwebtoken');

const generarJWT = ( uid, rut ) => {
    
    const payload = { uid, rut };

    return new Promise( (resolve, reject) => {

        jwt.sign( payload, process.env.SECRET_KEY, {
            expiresIn: '12h'
        }, (err, token) => {

            if(err){
                console.log(err);
                reject();
            }else{
                resolve( token );
            }
        });
    });
}

module.exports = {
    generarJWT
}