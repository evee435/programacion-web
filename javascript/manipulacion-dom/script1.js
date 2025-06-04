const alumnos = [
    {nombre: "Ana", edad: 28, nota: 8},
    {nombre: "Luis", edad: 17, nota: 5},
    {nombre: "Carla", edad: 22, nota: 9}
];
const contenedor = document.getElementById("lista");
const ul = document.createElement("ul");
alumnos.forEach(alumno => {
    const li = document.createElement ("li");
    li.textContent = alumno.nombre;
    ul.appendChild(li);

});
contenedor.appendChild(ul);