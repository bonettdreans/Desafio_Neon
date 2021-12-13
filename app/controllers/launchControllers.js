const { Launch } = require('../database/db')

module.exports = {
  async findAll(req, res) {
    try {
      const launch = await Launch.findAll();
      console.log(launch);
      if (launch) {
        res.json({
          status: 200,
          statusText: "OK",
          message: "Busca Encontrada com Sucesso!",
          data: launch,
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
      const launch = await Launch.findByPk(req.params.id);
      console.log(launch);
      if (launch) {
        res.json({
          status: 200,
          statusText: "OK",
          message: "Busca Encontrada com Sucesso!",
          data: launch,
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
  async createLaunch(req, res) {

    try {
      if (req.body.amount && req.body.date && req.body.title_launch && req.body.type_launch && req.body.client_id) {
        const launch = await Launch.create({
          amount: req.body.amount,
          date:req.body.date,
          title_launch: req.body.title_launch,
          type_launch: req.body.type_launch,
          client_id: req.body.client_id
        });
        res.status(201).json({
          message: "Lançamento feito Com Sucesso!",
          status: 201,
          statusText: "Created",
          message: "Lançamento feito Com Sucesso!",
          data: launch,
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
  async updateLaunch(req, res) {
    try {
      const launch = await Launch.findByPk(req.params.id);
      if (
        launch &&
        req.body.amount,
        req.body.date,
        req.body.title_launch,
        req.body.type_launch
      ) {
        await launch.update(req.body);
        return (
          res.status(201).json({
            status: 201,
            statusText: "Editado",
            message: "Dados Editados com Sucesso!",
            data: lancamento,
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
  async deletLaunch(req, res) {
    try {
      const launch = await Launch.findByPk(req.params.id);
      if (launch) {
        await launch.destroy();
        return (
          res.status(201).json({
            status: 201,
            statusText: "Apagado",
            message: "Dados Apagados com Sucesso!",
            data: launch,
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
  }
};
