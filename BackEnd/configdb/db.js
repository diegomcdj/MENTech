const mongoose = require("mongoose");
require("dotenv").config();

const conectarBD = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Conexión a la Base de Datos de manera Exitosa"))
    .catch((err) => console.log(err));
};

module.exports = conectarBD;


