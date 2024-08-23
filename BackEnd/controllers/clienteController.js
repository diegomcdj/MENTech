const Cliente = require("../models/Cliente");

exports.agregarClientes = async (request, response) => {
  try {
    const clientes = new Cliente(request.body);
    await clientes.save();
    response.json(clientes);
  } catch (error) {
    response.status(500).send("Hubo un error al crear el cliente");
    console.log(error.message);
  }
};

exports.obtenerClientes = async (request, response) => {
  try {
    const clientes = await Cliente.find();
    response.json(clientes);
  } catch (error) {
    response.status(500).send("Hubo un error al obtener los clientes");
    console.log(error.message);
  }
};

exports.obtenerCliente = async (request, response) => {
  try {
    const cliente = await Cliente.findById(request.params.id);
    if (!cliente) {
      response.status(404).send("Cliente no encontrado");
      return;
    }
    response.json(cliente);
  } catch (error) {
    response.status(500).send("Hubo un error al obtener el cliente");
    console.log(error.message);
  }
};

exports.actualizarCliente = async (request, response) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(
      { _id: request.params.id },
      request.body,
      {
        new: true,
      }
    );
    if (!cliente) {
      response.status(404).send("Cliente no encontrado");
      return;
    }
    response.json(cliente);
  } catch (error) {
    response.status(500).send("Hubo un error al actualizar el cliente");
    console.log(error.message);
  }
};

exports.eliminarCliente = async (request, response) => {
  try {
    let cliente = await Cliente.findById(request.params.id);
    if (!cliente) {
      response.status(404).send("Cliente no encontrado");
      return;
    }
    await Cliente.findOneAndDelete({ _id: request.params.id });
    response.json({ msg: "Cliente eliminado correctamente" });
    return;
  } catch (error) {
    response.status(500).send("Hubo un error al eliminar el cliente");
    console.log(error.message);
  }
};

exports.buscarClientePorNombre = async (request, response) => {
  try {
    const { nombre } = request.params;
    const cliente = await Cliente.find({ nombre: new RegExp(nombre, "i") });
    response.json(cliente);
  } catch (error) {
    response.status(500).send("Hubo un error al buscar el cliente");
    console.log(error.message);
  }
};
