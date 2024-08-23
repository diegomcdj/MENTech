const mongoose = require("mongoose");

const proveedorSchema = mongoose.Schema({
  RazónSocial: {
    type: String,
    require: true,
    trim: true,
  },
  NIT: {
    type: Number,
    require: true,
    unique: true,
  },
  Dirección: {
    type: String,
    require: true,
    trim: true,
  },
  Teléfono: {
    type: Number,
    require: true,
  },
  Email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Proveedor", proveedorSchema);
