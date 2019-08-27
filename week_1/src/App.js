import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    // no need for a constructor method to create a state
    state = {count: 0}

    // {} = access something

    render() { // return html to display
        return (
            <div>
                <button onClick={this.increment}>Add 1</button>
                {this.state.count}
            </div>
        );
    }

    increment = () => { // arrow notation; name of function = (parameters) => {function}
        this.setState({count: this.state.count + 1})
    }
}

export default App;
