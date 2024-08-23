const Categoria = require("../models/Categoria");

exports.agregarCategorias = async (request, response) => {
  try {
    const categorias = new Categoria(request.body);
    await categorias.save();
    response.json(categorias);
  } catch (error) {
    response.status(500).send("Hubo un error al crear el proveedor");
    console.log(error.message);
  }
};

exports.obtenerCategorias = async (request, response) => {
  try {
    const categorias = await Categoria.find();
    response.json(categorias);
  } catch (error) {
    response.status(500).send("Hubo un error al obtener los proveedores");
    console.log(error.message);
  }
};

exports.obtenerCategoria = async (request, response) => {
  try {
    const categoria = await Categoria.findById(request.params.id);
    if (!categoria) {
      response.status(404).send("Categoria no encontrado");
      return;
    }
    response.json(categoria);
  } catch (error) {
    response.status(500).send("Hubo un error al obtener la Categoria");
    console.log(error.message);
  }
};

exports.actualizarCategoria = async (request, response) => {
  try {
    const categoria = await Categoria.findByIdAndUpdate(
      { _id: request.params.id },
      request.body,
      {
        new: true,
      }
    );
    if (!categoria) {
      response.status(404).send("Categoria no encontrado");
      return;
    }
    response.json(categoria);
  } catch (error) {
    response.status(500).send("Hubo un error al actualizar la categoria");
    console.log(error.message);
  }
};

exports.eliminarCategoria = async (request, response) => {
  try {
    let categoria = await Categoria.findById(request.params.id);
    if (!categoria) {
      response.status(404).send("Categoria no encontrado");
      return;
    }
    await categoria.remove();
    response.json({ message: "Categoria eliminada" });
  } catch (error) {
    response.status(500).send("Hubo un error al eliminar la categoria");
    console.log(error.message);
  }
};
