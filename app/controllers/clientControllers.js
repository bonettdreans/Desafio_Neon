const { Client } = require ('../database/db')

module.exports = {
  async findOne(req, res) {
    try {
      const findClient = await Client.findByPk(req.params.id);
        if (findClient) {
              res.status(400)
            } else {
              res.status(400)
            }
          } catch (error) {
            res.status(400)
          }
        },
      };

