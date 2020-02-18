import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render(){
    /*console.log(this.props.todos);*/
    return this.props.todos.map( (task) =>(  /*input from App.js state*/
    <TodoItem key={task.id} todo={task} markComplete = {this.props.markComplete} delTodo={this.props.delTodo}/> // key = unique id
    ));
  }
}

// Property Types, tells us what data type the input of the prop is going to be
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;