const { Client } = require ('../database/db')

module.exports = {
  async findOne(req, res) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
          try {
            const client = await Client.findByPk(req.params.id);
            if (client) {
              res.json({
                status: 200,
<<<<<<< HEAD
                data: client
              });
=======
                client: {"name": client.name}
              });
=======
    try {
      const findClient = await Client.findByPk(req.params.id);
        if (findClient) {
              res.status(400)
>>>>>>> main
>>>>>>> main
            } else {
              res.status(400).send(400)
            }
          } catch (error) {
            res.status(400).send(400)
          }
<<<<<<< HEAD
        }, 
      };
=======
<<<<<<< HEAD
        }, 
=======
        },
>>>>>>> main
      };

>>>>>>> main
