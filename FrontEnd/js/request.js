/* const url = "https://mentech-7.onrender.com/api/"; */
const url = "http://localhost:5000/api/";


function sendRequest(endPoint, method, data) {
  let request = new XMLHttpRequest();
  request.open(method, url + endPoint);
  request.responseType = "json";
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(data));
  return request;
}


