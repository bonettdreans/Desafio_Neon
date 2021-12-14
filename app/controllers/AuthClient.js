const { Client } = require ('../database/db');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
const authConfig = require ('../../config/authConfig');
require('dotenv').config();

module.exports = {
        
  async singIn (req, res) {

    let {email, password} = req.body;

      Client.findOne({
        where: {
          email: email
        }
      }).then (user =>{

        if(!user) {
          res.status(404).json({msg: "Usuario com este email não encontrado"});
        } else {

          if (bcrypt.compareSync(password, user.password)) {

            let token = jwt.sign({user: user}, authConfig.secret,{
              expiresIn:authConfig.expires
          });

          res.json({
            user:user,
            token:token
          })


          } else {
            res.status(401).json({msg: "Senha invalida"})
          }

        }

      }).catch(err => {
        res.status(500).json(err);
      })
  },
  
  
  async singUp (req, res, next) {
            try {
              const hash = await bcrypt.hash(req.body.password, 10);
              const result = await Client.create({
                name: req.body.name,
                email:req.body.email,
                password:  hash,
              }).then(user =>{
                  let token = jwt.sign({user: user}, authConfig.secret,{
                      expiresIn:authConfig.expires
                  });

                  res.json({
                      user: user,
                      token: token
                  });

              });
              /* res.status(201).json({
                status:201,
                statusTex: "Created",
                message: "New admin created", 
                Client: result }); */
            } catch (err) {
              next(new Error(err));
            }
        }

    };
        