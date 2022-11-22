import { HookGif } from '../Hooks/hookGif';
import React, { useEffect, useState } from 'react';
import getGifs from '../Services/getUrlApiGifs';
import Gif from '../components/Gif'

export default function ListOfGifs({params}){
    
    const {loading,gifs,keywoard}=HookGif(params)
    
    if(loading===true) {return <h1>CARGANDO </h1>}

    if(keywoard.length> 0 ){
        if(gifs.length>0){
            return (
                <div>
                    
                    {gifs.map(
                          value=>{
                            const {title}=value
                            const {id}=value
                            const {url}=value
                            return (<Gif key= {id} title={title} id={id} url={url} />)
                        }
                    )}
                </div>
                    
                )    
        }else{
            return (                
                "No hay gif"
            )
        }
    }else{    
        return (                
                "No hay gif"
            )
    }
        
   
}