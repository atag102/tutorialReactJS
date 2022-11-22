import React,{useContext}from 'react';
import contextoA from "../context/contextoViewGif"
import ContextoGifs from "../context/GifsContext"
import Gif from './Gif';

export default function DetalleGif({params}){
    const context=useContext(contextoA);
    const {gifs} =useContext(ContextoGifs);
    console.log(context);
    
    const gif=gifs.find(singleGif=>singleGif.id==params.id);
    console.log(gif);
    return (
        <div>
            <h1>Gif con ID={params.id}</h1>
            <Gif title={gif["title"]} id={gif["id"]} url={gif["url"]} />
        </div>)
}