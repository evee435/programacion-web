import { Hijo2 } from "./hijo2";

export function hijo1({nombre}){
    return(
        <>
        <h2>Hijo1</h2>
        <p>{nombre}</p>
        <Hijo2 nombre= {nombre}/>
        </>
    );
}