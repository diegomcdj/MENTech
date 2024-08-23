const Proveedor = require("../models/Proveedor");

exports.agregarProveedores = async (request, response) => {
  try {
    const proveedores = new Proveedor(request.body);
    await proveedores.save();
    response.json(proveedores);
  } catch (error) {
    response.status(500).send("Hubo un error al crear el proveedor");
    console.log(error.message);
  }
};

exports.obtenerProveedores = async (request, response) => {
  try {
    const proveedores = await Proveedor.find();
    response.json(proveedores);
  } catch (error) {
    response.status(500).send("Hubo un error al obtener los proveedores");
    console.log(error.message);
  }
};

exports.obtenerProveedor = async (request, response) => {
  try {
    const proveedor = await Proveedor.findById(request.params.id);
    if (!proveedor) {
      response.status(404).send("Proveedor no encontrado");
      return;
    }
    response.json(proveedor);
  } catch (error) {
    response.status(500).send("Hubo un error al obtener el proveedor");
    console.log(error.message);
  }
};

exports.actualizarProveedor = async (request, response) => {
  try {
    const proveedor = await Proveedor.findByIdAndUpdate(
      { _id: request.params.id },
      request.body,
      {
        new: true,
      }
    );
    if (!proveedor) {
      response.status(404).send("Proveedor no encontrado");
      return;
    }
    response.json(proveedor);
  } catch (error) {
    response.status(500).send("Hubo un error al actualizar el proveedor");
    console.log(error.message);
  }
};

exports.eliminarProveedor = async (request, response) => {
  try {
    let proveedor = await Proveedor.findById(request.params.id);
    if (!proveedor) {
      response.status(404).send("Proveedor no encontrado");
      return;
    }
    await Proveedor.findByIdAndDelete(request.params.id);
    response.json({ message: "Proveedor eliminado" });
  } catch (error) {
    response.status(500).send("Hubo un error al eliminar el proveedor");
    console.log(error.message);
  }
};
