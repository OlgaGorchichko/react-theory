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

  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {
    return (
      <div className='App'>
        <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.pageTitle}</h1>

          <input type="text" onChange={this.handleInput}/>
          
          <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>
          
          { this.state.cars.map((car, index) => {
            return (
              <Car
                key={index}
                name={car.name} 
                year={car.year}
                onChangeTitle={() => this.changeTitleHandler(car.name)} />
            )
          })}
       </header>
      </div>
    );
    
  }
}

export default App;
