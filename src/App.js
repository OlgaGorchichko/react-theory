import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Car from './Car/Car.js';

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda 3', year: 2010}
    ],
    pageTitle: 'React components'
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  render() {
    const cars = this.state.cars;

    return (
      <div className='App'>
        <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.pageTitle}</h1>
          
          <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>  

          <Car 
            name={cars[0].name} 
            year={cars[0].year}
            onChangeTitle={() => this.changeTitleHandler(cars[0].name)} />
          <Car 
            name={cars[1].name} 
            year={cars[1].year}
            onChangeTitle={() => this.changeTitleHandler(cars[1].name)} />
          <Car 
            name={cars[2].name} 
            year={cars[2].year}
            onChangeTitle={() => this.changeTitleHandler(cars[2].name)} />

       </header>
      </div>
    );
    
  }
}

export default App;
