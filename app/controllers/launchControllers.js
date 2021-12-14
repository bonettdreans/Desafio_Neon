const { Launch } = require('../database/db')
const { Client } = require ('../database/db')
const guiaValidators = require("../validators/guiaValidators")

module.exports = {
  async clientLaunch(req, res) {
    try {
      const clientLaunch = await Client.findByPk(req.params.id, {
          include: {
          association: "valor",
          attributes: ['launch_id',  'amount', 'date', 'title_launch']
              }
      });
      if (clientLaunch) {
            res.json({
                status: 200,
              data: {
                "client_id": clientLaunch.client_id,
                "name": clientLaunch.name,
                "email": clientLaunch.email,
                "valor": [
                  clientLaunch.valor  
                ]
              },
              });
            } else {
              res.status(400)
            }
          } catch (error) {
            res.status(400)
          }
        },
  async createLaunch(req, res) {
    const { amount, title_launch, type_launch } = req.body;
    let validation = new guiaValidators();
    validation.hasMinLen(req.body.amount, 2, "valor não pode ser vacio");
    validation.hasMaxLen(req.body.amount, 14, "valor não pode ser maior 12 caracteres");
    validation.hasMinLen(req.body.date, 10, "data invalida");
    validation.hasMaxLen(req.body.date, 10, "data não pode ser maior 10 caracteres");
    validation.hasMinLen(req.body.title_launch, 2, "descripção não pode ser vacio");
    validation.hasMaxLen(req.body.title_launch, 50, "descripção não pode ser maior 12 caracteres");
    validation.hasMinLen(req.body.type_launch, 2, "tipo de lançamento não pode ser vacio");
    validation.hasMaxLen(req.body.type_launch, 50, "tipo de lançamento não pode ser maior 12 caracteres");
    if (!validation.isValid()) {
      res.status(400).send(validation.errors()).end();
      return;
    }
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
    const { amount, title_launch, type_launch } = req.body;
    let validation = new guiaValidators();
    validation.hasMinLen(req.body.amount, 2, "valor não pode ser vacio");
    validation.hasMaxLen(req.body.amount, 14, "valor não pode ser maior 12 caracteres");
    validation.hasMinLen(req.body.date, 10, "data invalida");
    validation.hasMaxLen(req.body.date, 10, "data não pode ser maior 10 caracteres");
    validation.hasMinLen(req.body.title_launch, 2, "descripção não pode ser vacio");
    validation.hasMaxLen(req.body.title_launch, 50, "descripção não pode ser maior 12 caracteres");
    validation.hasMinLen(req.body.type_launch, 2, "tipo de lançamento não pode ser vacio");
    validation.hasMaxLen(req.body.type_launch, 50, "tipo de lançamento não pode ser maior 12 caracteres");
    if (!validation.isValid()) {
      res.status(400).send(validation.errors()).end();
      return;
    }
    try {
      const updateLaunch = await Launch.findByPk(req.params.id);
      if (
        updateLaunch &&
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
             status: 200,
             statusText: "Ok"
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