import React, { useContext, useState } from 'react';
import { createContext } from 'react';

const ThemeProvider=createContext();

export const ThemeProviderValue = ({children}) => {
    const [value,setValue]=useState('blue');
    return (
        <ThemeProvider.Provider value={{value,setValue}}>
            {children}
        </ThemeProvider.Provider>
    );
};


const Them=()=>{
    const {value,setValue}=useContext(ThemeProvider)
    return(
        <button style={{backgroundColor:value}}onClick={()=>setValue(value==='blue'?'red':'blue')}>Change Color</button>
    )
}

export default Them;


