import React from "react"
const NombreContext = React.createContext()

export function NombreProvider({children}){
    const name = 'Eve';

    return(
        <NombreContext value = {name}>
            {children}
        </NombreContext>
    );
}