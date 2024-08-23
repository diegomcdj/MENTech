const mongoose = require("mongoose");

const clienteSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
      trim: true,
    },

    apellido: {
      type: String,
      require: true,
      trim: true,
    },

    documento: {
      type: Number,
      require: true,
      unique: true,
    },

    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },

    telefono: {
      type: Number,
      require: true,
    },

    direccion: {
      type: String,
      trim: true,
    },
  },
  { versionkey: false }
);

module.exports = mongoose.model("Cliente", clienteSchema);
