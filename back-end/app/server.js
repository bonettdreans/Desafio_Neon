const express = require('express');
const bodyParser = require('body-parser')
const app = express();
require('dotenv').config();
const cors = require('cors')
const { connection } = require ('./database/db');

// Setting

const PORT = process.env.PORT || 9000

// Middleware   
// Para poder rellenar el req.body
app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use(require ('../routes/routerAuth'));
app.use(require('../routes/routerClient'));
app.use(require('../routes/routesLaunch'));

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`successfully initialized http://localhost:${PORT}`);

    connection.sync({force: false}).then (() => {
        console.log("Connection Full");
        });
});