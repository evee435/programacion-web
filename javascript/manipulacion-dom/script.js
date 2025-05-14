//manipulacion del DOM
//nos permite interactuar con un documento, modificar su estructura, estilo y contenido

//seleccionar elementos del DOM
//por ID
//obteniendo por id la etiqueta titulo
//nos permite acceder a todas sus propiedades
let titulo = document.getElementById("titulo"); //funcion que recibe dos cosas
console.log(titulo);
console.log(titulo.textContent, titulo.innerText);

titulo.textContent = "este es el nuevo titulo";

//eventos(addEventListener, onClick, onChange)
let boton = document.getElementById("boton")
boton.addEventListener("click", function(){
    alert('este boton ha sido clickeado')

let container = document.getElementById("container");
const parrafo = document.createElement("p")
parrafo.textContent = "estes es el parrafo creado";
container.append(parrafo);
})

