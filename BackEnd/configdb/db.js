const mongoose = require("mongoose");
require("dotenv").config();

const conectarBD = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("estamos conectados"))
    .catch((err) => console.log(err));
};

module.exports = conectarBD;


