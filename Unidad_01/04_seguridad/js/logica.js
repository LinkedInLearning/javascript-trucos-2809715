// Como evitar el XSS: Cross-Site Scripting

// Nunca utilizar eval()

var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("param");

// Sanitizar parámetro

// Descarga DOMPurify desde https://github.com/cure53/DOMPurify/tree/main

DOMPurify.sanitize(c);

function init(){
  document.getElementById("btn").addEventListener("click", e => {
    let comentario = document.getElementById("exampleFormControlTextarea1").value;
    let div = document.createElement("div");

    // No:
    div.innerHTML = comentario;

    // Si:
    div.textContent = comentario;

    // Si:
    div.innerHTML = DOMPurify.sanitize(comentario);

    document.getElementById("comentarios").appendChild(div);
  });
}

function noUsada(){}

function noUsada2(){}

function noUsada3(){}
noUsada3();

init();
