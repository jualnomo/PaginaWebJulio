// alert("Hola este es mi Javascript");

//let nombre = "Julio";
//const nombre1 = "Alfonso";
//var nombre2 = "Esteban";

//console.log(nombre)
//console.log(nombre1)
//console.log(nombre2)

//if (2 > 3) { console.log("2 es mayor que 3") } else { console.log("3 es mayor que 2") }

let contenido = "nuevonombre";
let titulo = document.querySelector(".section .h1");
titulo.innerHTML = contenido;
//condicion
let textotitulo = titulo.innerText
console.log(textotitulo);

if (textotitulo == "nuevonombre") {
    textotitulo = "Otro";
} else {
    console.log("no se cumple");
}

//estrofa.innerText = cambiodepal(palabra1, palabra2, palabra3);