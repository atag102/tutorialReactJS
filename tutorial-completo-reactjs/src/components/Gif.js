import React, {useContext} from 'react';
import ContextoGifs from "../context/GifsContext"
import {useLocation} from "wouter";

export default function Gif({title,id,url}){
    // eslint-disable-next-line no-lone-blocks
    {
        const [gif,setLocation]= useLocation();
        return (
        <div>
            <a href={`${id}`} onClick={(e)=>{ e.preventDefault();  setLocation(`Gif/Detalle/${id}`)}}>
                <h4>{title}</h4> 
                <small>{id}</small>
                <img alt={title} src={url}/>
            </a>
        </div>
    )
    }
}