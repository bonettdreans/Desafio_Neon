require('dotenv').config()

module.exports = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "Neon2",
  host: process.env.DB_HOST ||"localhost",
  dialect:process.env.DB_DIALECT ||"mysql",
  define: {
    timestamps: false, //Apaga arquivos Crea

    underscored: true
  }
}