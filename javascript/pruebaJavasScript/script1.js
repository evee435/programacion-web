const productos = [
  { nombre: "Notebook", precio: 800 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Teclado", precio: 50 },
];
//const contenedor = document.getElementById("lista");
const ul = document.getElementById("ul");
productos.forEach(producto => {
    const li = document.createElement ("li");
    ul.append(li)
    li.append (producto.nombre)
})
