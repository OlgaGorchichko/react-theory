import React, {Component} from 'react'
//import Auxiliary from '../hoc/Auxiliary'

export default class Counter extends Component {
    state = {
        counter: 0
    }

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
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
                <button onClick={this.addCounter}>+</button>
                <button onClick={this.deleteCounter}>-</button>
            </>
        )
        // return (
        //     <Auxiliary>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={this.deleteCounter}>-</button>
        //     </Auxiliary>
        // )

        // return (
        //     <React.Fragment>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={this.deleteCounter}>-</button>
        //     </React.Fragment>
        // )

        // return [
        //     <h2 key={'1'}>Counter {this.state.counter}</h2>,
        //     <button key={'2'} onClick={this.addCounter}>+</button>,
        //     <button key={'3'} onClick={this.deleteCounter}>-</button>
        // ]
    }
}