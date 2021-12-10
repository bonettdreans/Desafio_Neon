const { Client } = require ('../database/db')

module.exports = {
    async findAll  (req, res) {
        const client = await Client.findAll({
          include: {
            association: "valor",
            attributes: ['amount']
          
          }
        })
        
        res.json(client)
    },
      async findAll(req, res) {
          try {
            const client = await Client.findAll();
            if (client) {
              res.json({
                status: 200,
                statusText: "OK",
                message: "Busca Encontrada com Sucesso!",
                data: client,
              });
              console.log("Busca Encontrada com Sucesso!");
            } else {
              res.status(400).send({
                status: 400,
                statusText: "Bad Request",
                message: "Erro de Busca. Dados Não Existentes!",
              });
            }
          } catch (error) {
            res.status(400).send({
              status: 400,
              statusText: "Bad Request",
              message: "Erro de Busca. Dados Não Existentes!",
            }),
              console.log("Erro de Busca. Dados Não Existentes!");
          }
        },
        async findOne(req, res) {
          try {
            const client = await Client.findByPk(req.params.id, {
              include: {
                association: "valor",
                attributes: ['amount']
              
              }
            });
            if (client) {
              res.json({
                status: 200,
                statusText: "OK",
                message: "Busca Encontrada com Sucesso!",
                data: client,
              });
              console.log("Busca Encontrada com Sucesso!");
            } else {
              res.status(400).send({
                status: 400,
                statusText: "Bad Request",
                message: "Erro de Busca. Dados Não Existentes!",
              });
            }
          } catch (error) {
            res.status(400).send({
              status: 400,
              statusText: "Bad Request",
              message: "Erro de Busca. Dados Não Existentes!",
            }),
              console.log("Erro de Busca. Dados Não Existentes!");
          }
        },
        async createUser(req, res) {
          try {
            if (
              req.body.name &&
              req.body.email &&
              req.body.password 
            ) {
              const client = await Client.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
              });
              res.status(201).json({
                message: "Lançamento feito Com Sucesso!",
                status: 201,
                statusText: "Created",
                message: "Lançamento feito Com Sucesso!",
                data: client,
              });
            } else {
              res.status(400).send({
                status: 400,
                statusText: "Bad Request",
                message: "Não cadastrado!",
              }),
                console.log("Não cadastrado!");
              return;
            }
          } catch (error) {
            res.status(400).send({
              status: 400,
              statusText: "Bad Request",
              message: "Falha no cadastro. Verifique os Dados!",
            }),
              console.log("Falha no cadastro. Verifique os Dados!");
          }
        },
        async updateUser(req, res) {
          try {
            const client = await Client.findByPk(req.params.id);
            if (
              client &&
              req.body.name &&
              req.body.email &&
              req.body.password
            ) {
              await client.update(req.body);
              return (
                res.status(201).json({
                  status: 201,
                  statusText: "Editado",
                  message: "Dados Editados com Sucesso!",
                  data: client,
                }),
                console.log("Dados Editados com Sucesso!")
              );
            } else {
              console.log("Erro de Edição. Verifique os Dados!");
            }
          } catch (error) {
            res.status(400).send({
              status: 400,
              statusText: "Bad Request",
              message: "Erro de Edição. Verifique os Dados!",
            }),
              console.log("Erro de Edição. Verifique os Dados!");
          }
        },
        async deletUser(req, res) {
          try {
            const client = await Client.findByPk(req.params.id);
            if (client) {
              await client.destroy();
              return (
                res.status(201).json({
                  status: 201,
                  statusText: "Apagado",
                  message: "Dados Apagados com Sucesso!",
                  data: client,
                }),
                console.log("Dados Apagados com Sucesso!")
              );
            } else {
              res.status(400).send({
                status: 400,
                statusText: "Bad Request",
                message: "Dados Não Existentes!!",
              }),
                console.log("Dados Não Existentes!!");
            }
          } catch (error) {
            res.status(400).send({
              status: 400,
              statusText: "Bad Request",
              message: "Erro de Deletado. Verifique os Dados!",
            }),
              console.log("Erro de Deletado. Verifique os Dados!");
          }
        },

async operation(req, res) {
  
try {
  
} catch (error) {
  
}

}

      };

