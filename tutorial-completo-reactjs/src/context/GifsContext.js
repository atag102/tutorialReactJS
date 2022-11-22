import React, { useState } from 'react';

const ContextoGifs=React.createContext({})

export function GifsContextProvider({children}){
    const [gifs,setGifs]=useState([]);

    return <ContextoGifs.Provider value={{gifs,setGifs}}>
        {children}
    </ContextoGifs.Provider>
}
export default ContextoGifs;