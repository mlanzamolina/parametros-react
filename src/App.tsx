import React from 'react';
import logo from './logo.svg';
import './App.css';
import BotonDespedida from './componentes/BotonDespedida';
import BotonSaludo from './componentes/BotonSaludo';
import BotonGlobal from './componentes/BotonGlobal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BotonDespedida />
        <BotonSaludo/>
        <BotonGlobal texto='lo que sea'/>
       
      </header>
    </div>
  );
}

export default App;
