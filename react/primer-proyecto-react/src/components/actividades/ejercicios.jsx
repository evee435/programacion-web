import { useState, useEffect } from "react";
function Contador() {
  const [numero, setNumero] = useState(5);
  //variable, funcion actualizadora, (valor incial)

  const handleClickSuma = () => {
    //cada vz que se presione click se sumara un numero
    setNumero(numero + 1); //la funcion se actualizara segun los parametros que le pongas

    console.log(nombre);
  };

  const handleClickResta = () => {
    setNumero(numero - 1);
  };
  const handleInputChange = (event) => { //maneja los cambios de valor en un input
    console.log(event);
    setNumero(event.target.value); //setNumero :actualiza el estado del componente ():accede al nuevo valor
  };
  const [mensaje, setMensaje] = useState('');

  useEffect(()=>{
    setMensaje ("holi");
  },[]);
  return (
    <div>
      <p>{numero}</p>
      <button onClick={handleClickSuma}>sumar</button>
      <button onClick={handleClickResta}>restar</button>
      <input type="text" onChange={handleInputChange} value={numero} /> 
    </div>
  );
}
export default Contador;
