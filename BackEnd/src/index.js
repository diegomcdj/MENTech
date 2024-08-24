const express = require("express");
const conectarBD = require("../configdb/db");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const puerto = 5000;

//llamamos a la función
conectarBD();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//ruta Home
app.get("/", (request, response) => {
  response.send("Bienvenidos estamos conectados");
});

app.listen(puerto, () => console.log("conectados desde el servidor", puerto));

//rutas
app.use("/api/clientes", require("../routers/clienteRutas"));
app.use("/api/proveedores", require("../routers/proveedoresRutas"));
app.use("/api/categorias", require("../routers/categoriasRutas"));

//middleware de autenticación
app.use((req, res, next) => {
  if (req.query.login === "diegomcdj") {
    next();
  } else {
    res.send("No tienes permiso para acceder a esta ruta");
  }
});

//ruta Dashboard Protegida
app.get("/Dashboard", (req, res) => {
  res.send("Dashboard Page");
});
