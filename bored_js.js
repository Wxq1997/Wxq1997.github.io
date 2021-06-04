
window.addEventListener("DOMContentLoaded", function () {
    findActivity("activity");
    document.querySelector("#submit").addEventListener("click", function () {
        const input = document.getElementById("textBox").value;
        findActivity(input);	   
    });
 });
 
 function findActivity(input) {
    
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", responseReceivedHandler);
    xhr.responseType = "json";
    xhr.open("GET", "https://www.boredapi.com/api/" + input);
    xhr.send();
 }

 document.querySelector("#try1").addEventListener("click", function() {
    document.getElementById("textBox").value = document.querySelector("#try1").innerText;
    findActivity(document.getElementById("textBox").value);
})

document.querySelector("#try2").addEventListener("click", function() {
    document.getElementById("textBox").value = document.querySelector("#try2").innerText;
    findActivity(document.getElementById("textBox").value);
})

 function responseReceivedHandler() {
    const result = document.querySelector("#result");
    const input = document.getElementById("textBox").value;
    if (this.status === 200) {
       if (this.response.error || input === "") {
          result.innerHTML = 'Incorrect API url or no activity found, please try again.';
          document.getElementById("middle2").style.height = "346px";
       }
       else {
            let html = "<tr>";
            html += '<th scope="row" class="col-4">activity</th>';
            html += `<th class="col-8">${this.response.activity}</th>`;
            html += "</tr>";

            html += "<tr>";
            html += '<th scope="row">type</th>';
            html += `<th>${this.response.type}</th>`;
            html += "</tr>";

            html += "<tr>";
            html += '<th scope="row">participants</th>';
            html += `<th class="text-start">${this.response.participants}</th>`;
            html += "</tr>";

            html += "<tr>";
            html += '<th scope="row">price</th>';
            html += `<th>${this.response.price}</th>`;
            html += "</tr>";

            html += "<tr>";
            html += '<th scope="row">link</th>';
            html += `<th>${this.response.link}</th>`;
            html += "</tr>";

            html += "<tr>";
            html += '<th scope="row">key</th>';
            html += `<th>${this.response.key}</th>`;
            html += "</tr>";

            html += "<tr>";
            html += '<th scope="row">accessibility</th>';
            html += `<th>${this.response.accessibility}</th>`;
            html += "</tr>";

            html += "</tr>";
            
            result.innerHTML = html;
       }
   
 }  else {
    result.innerHTML = "Incorrect API url, please try again.";
 }
 }