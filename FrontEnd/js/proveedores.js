function mostrarData() {
    // Código para mostrar los datos de los clientes
    let request = sendRequest("proveedores", "GET", null);
    let table = document.getElementById("proveedores_table");
    table.innerHTML = "";
    request.onload = function () {
      let data = request.response;
      console.log(data);
  
      data.forEach((element) => {
        table.innerHTML += `
        <tr>
          <td>${element.RazónSocial}</td>
          <td>${element.NIT}</td>
          <td> ${element.Dirección}</td>
          <td> ${element.Teléfono}</td>
          <td> ${element.Email}</td>
          <td> ${element.fechaCreacion}</td>
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
    document.getElementById("razónSocial").value = "";
    document.getElementById("nit").value = "";
    document.getElementById("dirección").value = "";
    document.getElementById("teléfono").value = "";
    document.getElementById("email").value = "";
    document.getElementById("fechaCreacion").value = "";
  
    document.getElementById("btnEditar").style.display = "none";
    document.getElementById("idAgregar").style.display = "block";
  }
  
  function cargarDatosEnModal(idProveedor) {
    // Limpieza de Modal
    limpiarFormulario();
    // Buscar el cliente por ID
    let request = sendRequest(`proveedores/${idProveedor}`, "GET", null);
  
    request.onload = function () {
      let proveedor = request.response;
      // Cargar los datos en los campos del modal
      document.getElementById("idProveedor").value = proveedor._id;
      document.getElementById("razónSocial").value = proveedor.RazónSocial;
      document.getElementById("nit").value = proveedor.NIT;
      document.getElementById("dirección").value = proveedor.Dirección;
      document.getElementById("teléfono").value = proveedor.Teléfono;
      document.getElementById("email").value = proveedor.Email;
      document.getElementById("fechaCreacion").value = proveedor.fechaCreacion;
  
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
  