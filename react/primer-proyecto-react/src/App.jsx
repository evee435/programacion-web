import {useEffect, useState} from "react"
import './App.css'
import Pepito from './components/usuario/Usuario';
import { Provedoor } from './components/usuario/proveedor/Proveedor';

function App() {
  const [characters, setCharacters]= useState([])

  useEffect(()=>{ 
    fetch("https://rickandmortyapi.com/api/character")
    .then((data)=> data.json())
    .then((response)=> setCharacters(response.results));

  }, [])

  return (
  <>
  {characters ? (
    characters.map((item, index)=> <p>{item.name}</p>)
  ) : (
    <> cargando ... </>
  )}
  Hola mundo
  <button>hola soy un boton</button>
   <Provedoor name = {"eve"}/>
  </>);
}

export default App;
