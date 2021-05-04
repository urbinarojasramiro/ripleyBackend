const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

const app = express();

dbConnection();

app.use( express.static('public') );

app.use( cors() );

app.use( express.json() );

app.use('/api/transfer', require( './routes/transfer' ) );

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});