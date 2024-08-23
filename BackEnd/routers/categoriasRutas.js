const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");


router.post("/", categoriaController.agregarCategorias);
router.get("/", categoriaController.obtenerCategorias);
router.get("/:id", categoriaController.obtenerCategoria);
router.put("/:id", categoriaController.actualizarCategoria);
router.delete("/:id", categoriaController.eliminarCategoria);

module.exports = router;
