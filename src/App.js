import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Car from './Car/Car.js';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda 3', year: 2010}
    ],
    pageTitle: 'React components',
    showCars: false
  }

  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars : cars
    })
  }

  toogleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);

    this.setState({cars: cars})
  }

  render() {
    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              name={car.name} 
              year={car.year}
              index={index}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={event => this.onChangeName(event.target.value, index)} />
          </ErrorBoundary>
        )
      })
    }

    return (
      <div className='App'>
        <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
          {/* <h1>{this.state.pageTitle}</h1> */}
          <h1>{this.props.title}</h1>

          <Counter/>
          <hr/>

          <button
            style={{marginTop: 20}}
            className={'AppButton'}
            onClick={this.toogleCarsHandler}
          >Toogle cars</button>

          <div style={{
            width: 400,
            margin: 'auto',
            paddingTop: '20px'
          }}>
            { cars }
          </div>
       </header>
      </div>
    );
    
  }
}

export default App;
