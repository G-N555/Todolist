import React, { Component } from 'react';
import '../App.css';
import Input from './Input';

export default class TodoItems extends Component {
  constructor(props) {
    super(props);
  }

  lineThrough = () => {
    return {
      textDecoration: this.props.todo.completed ? 
      'line-through' : 'none'
    }
  }

  render () {
    const { id, title } = this.props.todo;
    return(
      <div className="todoList" style={this.lineThrough()}>
        <p className="todoItems"> 
        <input className="input" type="checkbox" onChange={this.props.completed.bind(this, id)} />
        { title }
        </p>
      </div>
    )
  }
}