import  { useContext, useEffect, useState } from 'react';
import getGifs from '../Services/getUrlApiGifs';
import ContextoGifs from "../context/GifsContext"

export function HookGif({keywoard}){
    console.log(keywoard)
    if(keywoard===undefined){
        keywoard="";
    }
    
    

    //Hooks
    //inicio
    //const [gifs,setStateValue]=useState([]);
    const {gifs,setGifs}=useContext(ContextoGifs);
    const [loading,setLoadingValue]=useState(false);
    //Fin
    
    //Efectos
    //inicio
    useEffect(()=>{
    setLoadingValue(true)
    getGifs(keywoard).then((value)=>{setGifs(value); setLoadingValue(false)})
    }, [keywoard,setGifs])
    //fin

    return {loading,gifs,keywoard}
}