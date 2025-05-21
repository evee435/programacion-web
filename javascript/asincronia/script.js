const boton = document.getElementById("boton");
let contador = 0;
 //setTimeout
 //funcion que recibe como parametro dos valores
//recibe una funcion y recibe el tiempo que va tardar en ejecutarse 
boton.addEventListener("click", () =>{
    setTimeout(function () {
        alert("hola fui clikeado hace 2 segundos");
    }, 2000); //milisegundos
    setInterval(() => {
    contador ++;
    console.log (contador);
  }, 1000);

});

//setInterval()
//ejecutar el codigo cada n cantidad de tiempo

//asincronia 
//peticion de una api
//metodos: get, post, put, delete

//fetch
fetch('https://rickandmortyapi.com/api/character') //busca
.then((data) => data.json())
.then((response)=> console.log("response", response.results));

//asnyc await
const asyncFunction = async () => {
    //try catch
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character/2")
        const data = await response.json();
        console.log("data", data);
    } catch (error) {
        console.log ("error", error);
    }
};
asyncFunction();//para ejecutar una funcion debemos llamarla y poner parentesis y ; al final

//funcion regular asincrona
async function asyncFunc() {

}