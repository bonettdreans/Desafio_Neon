require('dotenv').config()

module.exports = {
  username: process.env.DB_USERNAME || "rqloml7vew3bmz23",
  password: process.env.DB_PASSWORD || "o75zme2kqwdlfqze",
  database: process.env.DB_DATABASE || "vv1spcordp4sflqt",
  host: process.env.DB_HOST ||"uzb4o9e2oe257glt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  dialect:process.env.DB_DIALECT ||"mysql",
  define: {
    timestamps: false, //Apaga arquivos Crea

    underscored: true
  }
}