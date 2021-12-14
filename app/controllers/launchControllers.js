const { Launch } = require('../database/db')
const { Client } = require ('../database/db')

module.exports = {
  async clientLaunch(req, res) {
    try {
      const clientLaunch = await Client.findByPk(req.params.id, {
          include: {
          association: "valor",
          attributes: ['amount', 'date', 'title_launch']
              }
      });
      if (clientLaunch) {
            res.json({
                status: 200,
                data: clientLaunch,
              });
            } else {
              res.status(400)
            }
          } catch (error) {
            res.status(400)
          }
        },
  async createLaunch(req, res) {
    try {
      if (req.body.amount && req.body.date && req.body.title_launch && req.body.type_launch && req.body.client_id) {
        const createLaunch = await Launch.create({
          amount: req.body.amount,
          date:req.body.date,
          title_launch: req.body.title_launch,
          type_launch: req.body.type_launch,
          client_id: req.body.client_id
        });
        res.status(201).json({
          status: 201,
          statusText: "Created"
        });
      } else {
        res.status(400)
      }
    } catch (error) {
      res.status(400)
    }
  },
  async updateLaunch(req, res) {
    try {
      const updateLaunch = await Launch.findByPk(req.params.id);
      if (
        launch &&
        req.body.amount,
        req.body.date,
        req.body.title_launch,
        req.body.type_launch
      ) {
        await updateLaunch.update(req.body);
        return (
           res.json({
             status: 201,
             statusText: "Created"
              })
        )
      } else {
        res.status(400)
      }
    } catch (error) {
      res.status(400)
    }
  },
  async deletLaunch(req, res) {
    try {
      const deleteLaunch = await Launch.findByPk(req.params.id);
      if (deleteLaunch) {
        await deleteLaunch.destroy();
        return (
          res.json({
             status: 201,
             statusText: "Created"
              })
        )
      } else {
        res.status(400)
      }
    } catch (error) {
      res.status(400)
    }
  }
};