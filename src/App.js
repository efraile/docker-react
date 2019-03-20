import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Soy el mago Tobías y respondo a tus preguntas
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>¿Que quieres saber?</p>
            A Si, soy yo
            
          </a>
        </header>
      </div>
    );
  }
}

export default App;
