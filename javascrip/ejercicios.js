const num= 0;
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
}