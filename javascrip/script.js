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
 const edad=20
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

//arreglos o arrays (listas en python)
const miArreglo = [1, 2, "pepito", true];
console.log(miArreglo[2]);

const miObjeto= {
    clave: "valor",
    nombre: "eve",
    edad: 17,
};
console.log(miObjeto.edad);

//iteramos una lista con for 
for(let i=0; i < miArreglo, length; i++){
    console.log(miArreglo[i]) //imprimi en pantalla el arreglo con su posicion
}