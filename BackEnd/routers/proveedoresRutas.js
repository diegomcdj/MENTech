const express = require("express");
const router = express.Router();
const proveedorController = require("../controllers/proveedorController");

router.post("/", proveedorController.agregarProveedores);
router.get("/", proveedorController.obtenerProveedores);
router.get("/:id", proveedorController.obtenerProveedor);
router.put("/:id", proveedorController.actualizarProveedor);
router.delete("/:id", proveedorController.eliminarProveedor);

module.exports = router;
