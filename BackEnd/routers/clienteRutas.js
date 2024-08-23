const express = require('express');
const router = express.Router();
const clienteController = require("../controllers/clienteController");

// Ruta/clientes

router.post("/", clienteController.agregarClientes);
router.get("/", clienteController.obtenerClientes);
router.get("/:id", clienteController.obtenerCliente);
router.put("/:id", clienteController.actualizarCliente); 
router.patch("/:id", clienteController.actualizarCliente);
router.delete("/:id", clienteController.eliminarCliente);



module.exports = router;
