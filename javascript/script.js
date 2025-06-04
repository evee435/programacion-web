var miVariable= 'contenido de la variable' //no se usa
let miVariable2= 'puede ser re-escritos sus valores' 

//let --> solamente vive en el scope declarado o en sus hijos

miVariable2= 'pueden ser re-escritos sus valores'
 miVariable2= 9 //resignacion del valor

 //const --> variable constante no son resignables los valores

 const miVariable3= 10;

 //tipos de datos
 const text= 'string'
 const numeros= 2 //number
 const booleanos= true //bolean
 //underfined --> valor no definido
 //null --> vacio

 //operadores
 //arimetricos: son todos los matematicos + - / % *
 //comparacion:
 //== doble igual compara el valor del dato
 //=== triple igual compara el valor y el tipo de dato
 //!= distinto el valor !==distinto valor y tipo
 //> < >= =< mayor menor, mayor o igual, menor o igual
 
 //condicionales
 //if
 const edad=17
 if (edad >18){
    console.log('sos mayor de edad');//muestra en consola, print en python
 }
 else {
    console.log("sos menor de edad");
 }

 //switch
 const dia = 2
 switch(dia){
    case 1: console.log("dia lunes"); break
    case 2: console.log("dia martes"); break
    default: console.log("dia no registrado")       
 }
//funciones 
//declaracion funcion clasica
function saludar(nombre){
    return `Hola ${nombre}`
}
console.log(saludar("eve"));
//arrow fuction 
//return explicito
const saludo= (nombre) => `hola ${nombre}`;
//si el return implicito tiene mas de una linea va estar envuelto en parentesis

//arreglos o arrays (listas en python) pero no todas ls listas son arrays
const miArreglo = [1, 2, "pepito", true];
console.log(miArreglo[2]);

const miObjeto= {
    clave: "valor",
    nombre: "eve",
    edad: 17,
};
console.log(miObjeto.edad);

//iteramos una lista con for 
for(let i=0; i < miArreglo.length; i++){
    console.log(miArreglo[i]) //imprimi en pantalla el arreglo con su posicion
}

//metodos de aarreglo
//length --> longitud del arreglo
const longitud = miArreglo.length;
console.log(longitud);

//push (valor) agrega un elemento al final 
//equivalente al append del python, solo funciona con arreglas
miArreglo.push("celeste")
console.log("cadena", miArreglo);

//pop() elimina el ultimo elemento de un arreglo
//si queremos lo podemos guardar en una variable
const ultimo = miArreglo.pop();
console.log("ultimo", ultimo);

//shift() elimina el primer valor de un arreglo, tambien lo guarda
const primero= miArreglo.shift();
console.log(primero);

//unshift(valor) agrega un elemento al principio del arreglo
miArreglo.unshift("eve");
console.log(miArreglo);

//forEach
//SOLO RECORRE, no guarda los valores en ningun lado 
miArreglo.forEach( (item, index, miArregloEntero) => { //recorre cada elemento y lo muestra
    console.log("index", index, "elemento", item, "mi arreglo entero", miArregloEntero)
})

//map recorre el arreglo, lo modifica con una funcion y nos devuelve uno nuevo
//modifica los elementos del array con funcion 
const nuevoArreglo = miArreglo.map((item, index) => {
    const num= 2
    return (item += num);
});

console.log("nuevo arreglo", nuevoArreglo);
//filter crea un nuevo array a apartir de los elementos que cumplan la condicion
const miArregloNum= [2, 4, 5, 6]
const pares= miArregloNum.filter((item) => item % 2 ===0);
console.log(pares);
