import React from 'react';
import './App.css';
import FormularioInputKeywoard from './components/formInputKeyword';
import ListOfGifs from './components/listOfGifs';

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <h3>gifs:</h3>
        <FormularioInputKeywoard />
      </section>
    </div>
  );
}

export default App;
