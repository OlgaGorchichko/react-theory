import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Car from './Car/Car.js';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Hello world!
         </p>
         <Car name='Ford' year={2018} />
         <Car name='Audi' year={2016} />
         <Car name='Mazda' year={2010}>
          <p style={{color: 'red'}}>COLOR</p>
         </Car>
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
