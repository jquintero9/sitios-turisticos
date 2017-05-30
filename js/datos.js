
function sendAjax(xhr, data, url) {
	xhr.open("GET", url, true);
	xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
	xhr.send(data);
}


window.addEventListener("load", function() {
	var xhr = new XMLHttpRequest();
	var data = {
      "$limit" : 5000,
      //"$$app_token" : "YOURAPPTOKENHERE"
  }
  var url = "https://www.datos.gov.co/resource/tij9-c7ef.json";

	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var response = JSON.parse(this.response);
			console.log(response);
		}
	};

	//sendAjax(xhr, data, url);
});