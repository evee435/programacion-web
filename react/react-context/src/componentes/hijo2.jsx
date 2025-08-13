import { Hijo3 } from "./hijo3";

export function Hijo2({nombre}){
    return(
        <>
        <h2>Hijo2</h2>
        <p>{nombre}</p>
        <Hijo3 nombre= {nombre}/>
        </>
    );
}