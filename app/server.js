const express = require('express');
const app = express();
require('dotenv').config()

// Setting
const PORT = process.env.PORT || 6000;

// Middleware
// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`successfully initialized http://localhost:${PORT}`);
})
