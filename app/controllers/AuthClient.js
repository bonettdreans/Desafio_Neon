const { Client } = require ('../database/db');
const bcrypt =require ('bcrypt');
const jwt = require ('jsonwebtoken');
const authConfig = require ('../../config/authConfig');
require('dotenv').config()

module.exports = {

    //login
    singIn(req, res) {

    },


    //Register
    singUp(req, res) {

        //Criptografia da Senha
        let: password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

        //Created User
        Client.create({
            name:req.body.name,
            email: req.body.email,
            password: password
        }). then(user => {

            //Criamos o Token
            let: token = jwt.sing({ user : user}, authConfig.secret, {
                expiresIn: authConfig.expires
            });

            res.json({
                user: user,
                token : token
            });

        }).catch(err => {
            res.status (500).json (err);
        });
    }
}