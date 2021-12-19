const jwt = require('jsonwebtoken');
const authConfig = require('../../config/authConfig');
const { Client } = require('../database/db'); 
const { Launch } = require('../database/db'); 



module.exports = (req, res, next) => {

    console.log(req.headers);

    if(!req.headers.authorization) {
        res.status(401).json({msg: "Unauthorized access"});

    } else {

        let token = req.headers.authorization.split(" ")[1];

        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "There was a problem decoding the token", err });
            } else {
                req.user = decoded;
                next();
            }

        })
    }

};