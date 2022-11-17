import React, { useState } from 'react';
import ListOfGifs from './listOfGifs';

export default function FormularioInputKeywoard(){
    // eslint-disable-next-line no-lone-blocks
    {
        let KEY="";
        const [keywoard,setKeywoard]=useState("");
        
        if(keywoard.length===0){
        return (
            <form>
                <input type="text" name="keywoardGIF" onChange={(e)=>{KEY=e.target.value}}/>
                <br />
                <button type='sumbit' onClick={
                    ()=>{
                        console.log(keywoard);
                        setKeywoard(KEY);
                        }
                    }>Buscar</button>
            </form>
            )
        }else{
            return (<ListOfGifs keywoard={keywoard}/>)            
        }
        
    }
}