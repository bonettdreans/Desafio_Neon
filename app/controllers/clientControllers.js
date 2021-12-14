const { Client } = require ('../database/db')

module.exports = {
  async findOne(req, res) {
<<<<<<< HEAD
          try {
            const client = await Client.findByPk(req.params.id);
            if (client) {
              res.json({
                status: 200,
                client: {"name": client.name}
              });
=======
    try {
      const findClient = await Client.findByPk(req.params.id);
        if (findClient) {
              res.status(400)
>>>>>>> main
            } else {
              res.status(400)
            }
          } catch (error) {
            res.status(400)
          }
<<<<<<< HEAD
        }, 
=======
        },
>>>>>>> main
      };

