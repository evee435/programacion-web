
import { useState } from 'react';
import './App.css'
import Contador from './components/actividades/ejercicios';

function App() {
  const [nombre, setNombre] = useState("");

  const handleClick= ()=>{
    console.log(nombre)
  };

  const handleInputChange = (event)=>{
    setNombre(event.target.value);

  };

  return (<>
  <input type='text'
   placeholder='escribi tu nombre'
   onChange={handleInputChange}
   value={nombre}/> 
  <button onClick={handleClick}>Mostrar</button>
  {nombre &&  <h2>{nombre}</h2>}
  {nombre === ''? <>hola</> : <>chau</>}
  <Contador/>

  </>);
}


export default App;
