const mongoose = require("mongoose");
require("dotenv").config();

const conectarBD = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => console.log("Conexión a la Base de Datos de manera Exitosa"))
    .catch((err) => console.log(err));
};

module.exports = conectarBD;
