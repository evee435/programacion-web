/*const num= 0;
if(num <0){
   console.log("negativo")
}
else if(num>0) {
    console.log("positivo")
}
else if(num===0){
    console.log("cero")
}

for(let i= 1; i<=10; i++){ //inicia en la variable i= 1, hasta que i sea menor igual a 10, i++ suma una i cada vez
    if (i % 2 === 0){
        console.log(i,);
    }
}
let suma=0;
for(let i= 1; i<=10; i++){
    if (i % 2 === 0){
        suma += i;
        console.log(i, suma);
        console.log(suma)
    }
}*/
const productos= []

const producto1 = {
    nombre:"uñas",
    precio: 12000,
    categoria:"belleza",
};
const producto2 = {
    nombre:"zapatillas",
    precio:180000,
    categoria:"indumentaria",
};
const producto3 = {
    nombre:"coca cola",
    precio:2800,
    categoria:"bebidas",
};
const producto4 = {
    nombre:"licuadora",
    precio:80000,
    categoria:"electro",
}
productos.push( producto1, producto2, producto3, producto4 )
console.log(productos)

productos.forEach(() => {
    
})