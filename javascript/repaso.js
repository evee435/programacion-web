const alumnos = [
    {nombre: "Ana", edad: 28, nota: 8},
    {nombre: "Luis", edad: 17, nota: 5},
    {nombre: "Carla", edad: 22, nota: 9}
];
console.log(alumnos)

alumnos.forEach((alumno)=> {
    if (alumno.nota >= 6)
        console.log("el alumno aprobo")

    else {
        console.log("el alumno reprobo")
    }

})

 const nombreMayus = alumnos.map((alumno)=> alumno.nombre.toUpperCase());
 console.log(nombreMayus)

 const mayoresDeEdad = alumnos.filter((alumno)=> alumno.edad >= 18)
 console.log(mayoresDeEdad)