var textoIntroducido = document.getElementById("twitEnviado");
function twittear(){
  var textoIntroducido = document.getElementById("twitEnviado");
  var twitDiv = document.getElementById("contentTwitts");
    if (textoIntroducido.value === " " || textoIntroducido.value === ""){
       alert("Hola, escribe tu twit");
    } else {
        var nameSpan = document.createElement("span");
        var dateSpan = document.createElement("span");
        var twitP = document.createElement("p");
        twitDiv.className = "twit";
        nameSpan.textContent = "Usuario";
        dateSpan.textContent = new Date();
        twitP.textContent = textoIntroducido.value;
        twitDiv.appendChild(nameSpan);
        twitDiv.appendChild(dateSpan);
        twitDiv.appendChild(twitP); 
    }
}
var miText = document.getElementById("twitEnviado");
var contador = document.getElementById("contador");

function contar() {
    var texto = document.getElementById("twitEnviado").value; 
    document.getElementById("contador").innerHTML =  texto.length ;
}