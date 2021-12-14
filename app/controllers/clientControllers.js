const { Client } = require ('../database/db')

module.exports = {
  async findOne(req, res) {
          try {
            const client = await Client.findByPk(req.params.id);
            if (client) {
              res.json({
                status: 200,
                client: {"name": client.name}
              });
            } else {
              res.status(400)
            }
          } catch (error) {
            res.status(400)
          }
        }, 
      };

