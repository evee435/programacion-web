//ejercicio 1
//punto a
const productos = [
  { nombre: "Notebook", precio: 800 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Teclado", precio: 50 },
];
productos.forEach((productos)=>{
    if (productos.precio >= 300){
        console.log("el producto es caro")
    }
    else {
        console.log("el producto es barato")
    }
})
//punto b
//const obtenerPrecioPromedio = productos.precio 

//ejercicio 2
const productosMayor = productos.filter((producto)=> producto.precio >= 100)
console.log(productosMayor)

const productoMin = productos.map((producto)=> producto.nombre.toLowerCase() ) 
console.log(productoMin)