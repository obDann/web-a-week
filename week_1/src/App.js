import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SingleTodo from "./SingleTodo.js"

class App extends Component {

    state = {
        todos: [],
        currentTodo: ""
    };

    render () {
        // js map
        let bulletedTodos = this.state.todos.map((e, i) => {
            return(
                <SingleTodo todo = {e} delete = {() => this.deleteTodo(i)} /> // power of props
            )
        });

        return(
            <div>
                <input placeholder = "Enter todo" value = {this.state.currentTodo}
                onChange = {this.onInputChange}/>
                <button onClick = {this.onClick}>Add!</button>
                <br />
                {this.state.todos.length === 0 ? "No todos yet" : <ul>{bulletedTodos}</ul>}
            </div>
        )

    }

    onInputChange = e => {
        this.setState({ currentTodo: e.target.value });
    }

    onClick = () => {
        let todosCopy = this.state.todos.slice(); // create exact copy of the list
        todosCopy.push(this.state.currentTodo); // add to end of list
        this.setState({todos: todosCopy, currentTodo: ""})
    }

    deleteTodo = i => {
        let todosCopy = this.state.todos.slice();
        todosCopy.splice(i, 1);

        this.setState({ todos: todosCopy});
    }

}

export default App;
