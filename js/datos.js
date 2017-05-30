
window.addEventListener("load", function() {
  var xhr = new XMLHttpRequest();
  var data = {"$limit" : 5000};
  var url = "https://www.datos.gov.co/resource/tij9-c7ef.json";
  
  var btnObtenerDatos = document.querySelector("#obtener-datos");
  var preloader = document.querySelector("#preloader");
  var urlDatos = document.querySelector("#url-datos");
  
  function sendAjax(xhr, data, url) {
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(data);
  }
  
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.response);
        var tableBody = document.querySelector("#table-body");
        
        for (index in response) {
          var row = document.createElement("tr");
          var rowHTML = "";
          var td = document.createElement("td");
          
          rowHTML += "<td>" + response[index].nombre + "</td>";
          rowHTML += "<td>" + response[index].tipo + "</td>";
          rowHTML += "<td>" + response[index].ubicaci_n + "</td>";
          rowHTML += "<td>" + response[index].sector + "</td>";
          
          row.innerHTML = rowHTML;
          tableBody.appendChild(row);
          console.log(response[index].nombre);
        }
        preloader.classList.add("disabled");
        urlDatos.classList.remove("disabled");
      }
  };

  btnObtenerDatos.addEventListener("click", function() {
    this.disabled = true;
    preloader.classList.remove("disabled");
    sendAjax(xhr, data, url);
  });
});