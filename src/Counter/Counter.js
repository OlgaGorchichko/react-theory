import React, {Component} from 'react'
import Counter2 from '../Counter2/Counter2';
//import Auxiliary from '../hoc/Auxiliary'

export default class Counter extends Component {
    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    deleteCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }

    render() {
        return (
            <>
                <h2>Counter {this.state.counter}</h2>
                <Counter2 />
                <button onClick={this.addCounter}>+</button>
                <button onClick={this.deleteCounter}>-</button>
            </>
        )
    }
};