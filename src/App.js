import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1 style={{color: 'white', fontSize: '20px'}}>
           Hello world!
         </h1>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header>
      </div>
    );
    
  }
}

export default App;
