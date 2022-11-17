import React, { useEffect, useState } from 'react';
import getGifs from '../Services/getUrlApiGifs';
import Gif from './Gif';

export default function ListOfGifs({keywoard}){

    console.log(keywoard);
    //Hooks
    //inicio
    const [stateValue,setStateValue]=useState([]);
    //Fin

    //Efectos
    //inicio
    useEffect(()=>{
    console.log("SE ACTUALIZO")
    getGifs(keywoard).then(value=>setStateValue(value))
    }, [])
    //fin
    
    if(stateValue.length!==0){
        return (
            stateValue.map(
                  value=>{
                    const {title}=value
                    const {id}=value
                    const {url}=value
                    return <Gif key= {id} title={title} id={id} url={url} />
                }
            )
        )
    }else{
        return "No tiene GIFS";
    }
}