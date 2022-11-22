import React, { useEffect, useState } from 'react';
import App from '../App';
import ListOfGifs from './listOfGifs';
import {Route,useLocation} from "wouter";




export default function FormularioInputKeywoard(){
    // eslint-disable-next-line no-lone-blocks
    {
        const [path,pushNavegation]=useLocation();
        let KEY="";
        let [keywoard,setKeywoard]=useState("");
        console.log("DESPUES DE ACTUALIZAR="+keywoard)
        
        //e.preventDefault(); deshabilita la funcion por defecto del boton sumbit

        function efectoBuscar(e,KEY){
            e.preventDefault()
            setKeywoard(KEY)
            console.log("KEY="+KEY);
            pushNavegation(`/List/${KEY}`)
        }

        return (
            <div>
                <h1>ES EL FORMULARIO NO HAY OTRO</h1>
                <form onSubmit={e=>{efectoBuscar(e,KEY)}}>
                    <input type="text"  name="keywoardGIF" onChange={(e)=>{ KEY=e.target.value}}/>
                    <br />
                    
                    <button>
                        aaaaaa
                    </button>
                </form>
            </div>
            )
    }
}