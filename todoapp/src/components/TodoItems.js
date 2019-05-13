import React, { Component } from 'react';
import '../App.css';

export default class TodoItems extends Component {

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
        <button className="btn" onClick={this.props.delItem.bind(this, id)}>Delete</button>
        </p>
      </div>
    )
  }
}