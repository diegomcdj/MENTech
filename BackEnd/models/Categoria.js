const mongoose = require("mongoose");

const categoriaSchema = mongoose.Schema({
  nombre: {
    type: String,
    require: true,
    trim: true,
  },
  descripcion: {
    type: String,
    require: true,
    trim: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now(),
  },
});


module.exports = mongoose.model("Categoria", categoriaSchema);