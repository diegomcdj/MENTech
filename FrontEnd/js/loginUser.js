function loginUser(event) {
  event.preventDefault(); // Previene la recarga de la página al enviar el formulario

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = {
    email: email,
    password: password,
  };

  console.log(data)

  try {
    let res = sendRequest("users/login", "POST", data);
    res.onload = function () {
      if (res.status === 200) {
        const user = res.response;
        console.log(user)
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "clientes.html";
      } else {
        console.log(res.response);
      }
    };
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

function logoutUser() {
  try {
    let res = sendRequest("logout", "POST", {});
    res.onload = function () {
      if (res.status === 200) {
        localStorage.removeItem("user");
        document.cookie =
          "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/FrontEnd;";
        window.location.href = "index.html";
      } else {
        console.log(res.response);
      }
    };
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
