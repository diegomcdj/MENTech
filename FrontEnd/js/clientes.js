function mostrarData() {
  // Código para mostrar los datos de los clientes
  let request = sendRequest("clientes", "GET", null);
  let table = document.getElementById("clientes_table");
  table.innerHTML = "";
  request.onload = function () {
    let data = request.response;
    console.log(data);

    data.forEach((element) => {
      table.innerHTML += `
      <tr>
        <td>${element.nombre}</td>
        <td>${element.apellido}</td>
        <td> ${element.documento}</td>
        <td> ${element.email}</td>
        <td> ${element.telefono}</td>
        <td> ${element.direccion}</td>
        <td>
          <button class="btn btn-outline-warning" type="button"                 
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onclick="cargarDatosEnModal('${element._id}')"><i class="bi bi-gear"></i> Editar
          </button>
          <button class="btn btn-outline-danger" 
                  onclick="eliminarCliente('${element._id}')"><i class="bi bi-person-x"></i> Eliminar
          </button>
        </td>
      </tr>`;
    });
  };
  request.onerror = function () {
    `
    <tr>
      <td colspan="">Error al traer los datos</td>
    </tr>
    `;
  };
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById("documento").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("direccion").value = "";

  document.getElementById("btnEditar").style.display = "none";
  document.getElementById("idAgregar").style.display = "block";
}

function cargarDatosEnModal(idCliente) {
  // Limpieza de Modal
  limpiarFormulario();
  // Buscar el cliente por ID
  let request = sendRequest(`clientes/${idCliente}`, "GET", null);

  request.onload = function () {
    let cliente = request.response;
    // Cargar los datos en los campos del modal
    document.getElementById("idCliente").value = cliente._id;
    document.getElementById("nombre").value = cliente.nombre;
    document.getElementById("apellido").value = cliente.apellido;
    document.getElementById("email").value = cliente.email;
    document.getElementById("documento").value = cliente.documento;
    document.getElementById("telefono").value = cliente.telefono;
    document.getElementById("direccion").value = cliente.direccion;

    document.getElementById("idAgregar").style.display = "none";
    document.getElementById("btnEditar").style.display = "block";
  };
}


function agregarCliente() {
  // Código para agregar un cliente
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let documento = document.getElementById("documento").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;

  let data = {
    nombre: nombre,
    apellido: apellido,
    documento: documento,
    email: email,
    telefono: telefono,
    direccion: direccion,
  };

  let request = sendRequest("clientes", "POST", data);
  request.onload = function () {
    mostrarData();
  };
}

function editarCliente(id) {
  // Código para editar un cliente
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let documento = document.getElementById("documento").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;

  let data = {
    _id: id,
    nombre: nombre,
    apellido: apellido,
    documento: documento,
    email: email,
    telefono: telefono,
    direccion: direccion,
  };

  //console.log(data)
  /* event.preventDefault(); */
  let request = sendRequest("clientes/" + id, "PUT", data);
  request.onload = function () {
    mostrarData();
  };
}

function eliminarCliente(id) {
  // Código para eliminar un cliente
  let request = sendRequest("clientes/" + id, "DELETE");
  request.onload = function () {
    mostrarData();
  };
}
