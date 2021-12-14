const jwt = require('jsonwebtoken');
const authConfig = require('../../config/authConfig');
const { Client } = require('../database/db'); 
const { Launch } = require('../database/db'); 



module.exports = (req, res, next) => {

    console.log(req.headers);

    // Comprobar que existe el token
    if(!req.headers.authorization) {
        res.status(401).send({
            status: 401,
            statusText: "Unauthorized",
            message: "Erro identificado al codificar o token!",
          });
    } else {

        // Comrpobar la validez de este token
        let token = req.headers.authorization.split(" ")[1];

        // Comprobar la validez de este token
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(400).send({
                    status: 401,
                    statusText: "Unauthorized",
                    message: "Erro identificado al codificar o token!",
                  });
            } else {
                req.user = decoded;
                next();
            }

        })
    }

};