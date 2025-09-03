import { useState } from 'react'
import './App.css'

function App() {
  const[num,setNum] = useState([1,2,3,4])
  const[persona, setPersona] = useState ({nombre: "evelyn", edad: 17})
 
    //hacer que el setNum agregue numeros consecutivos -> 3 puntos

  function myFunction(){
    const ultimo = num[num.length - 1] //obtiene el ultimo numero del array
    setNum([...num,ultimo +1 ])//genera el siguiente consecutivo y se agrega en la lista

  }

  //Agregar una propiedad al objeto persona usando spread operator y que al hacer click en un boton dispare la funcion y la muestre por consola -> 4 puntos

  function nuevaPersona() {
    const nuevaPersona = {...persona, apellido: "Villarreal" // se agrega una nueva propiedad
    }
    setPersona(nuevaPersona)
    console.log(nuevaPersona) // se muestra en consola
  }

  //cambiar el nombre del objeto original
    function cambiarPersona() {
    const nuevaPersona = {...persona, nombre: "clara" // se agrega una nueva propiedad
    }
    setPersona(nuevaPersona)
    console.log(nuevaPersona) // se muestra en consola
  }


  return (
    <>
     <div>
      {num.map((item,index)=>(
        <p>{item}</p>

      ))}
      <button onClick={myFunction}>agregar numero</button>
      <button onClick={nuevaPersona}>agrega propiedad</button>
      <button onClick={cambiarPersona}>cambia el nombre</button>
      <p>Nombre {persona.nombre}</p>
     </div>
    </>
  )
}
export default App
