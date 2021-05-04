const mongoose = require('mongoose');

const dbConnection = async() => {

    try{

        await mongoose.connect( process.env.MONGODB_CONNECTION, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useCreateIndex: true 
        });

        console.log('Conexión a la BD es correcta')

    }catch(error){
        console.log(error);
        throw new Error('Error al intenetar conectarse con la base de datos');
    }
}

module.exports = {
    dbConnection
}