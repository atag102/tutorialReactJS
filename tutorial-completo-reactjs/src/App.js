import React from 'react';
import { Route,useLocation } from 'wouter';
import './App.css';
import DetalleGif from './components/deatlleGif';
import {GifsContextProvider} from "./context/GifsContext";
import FormularioInputKeywoard from './components/formInputKeyword';
import ListOfGifs from './components/listOfGifs';
import contextoA from "./context/contextoViewGif"

/* Es importante donde pone el Router porque segun donde lo ponga el React lo pondra ese compomponente
en ese lugar */

function App() {
  return (
    <contextoA.Provider value={
      {name:"Antonio",
      progreso:true}
    }>
      <div className="App">
        <section className="App-header">
          <h3>gifs:</h3>
          <GifsContextProvider>
            <FormularioInputKeywoard />
            <Route component={ListOfGifs} path='/List/:keywoard'/>
            <Route component={DetalleGif} path='/List/Gif/Detalle/:id'/>
          </GifsContextProvider>
        </section>
      </div>
    </contextoA.Provider>
  );
}

export default App;
