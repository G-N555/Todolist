import React, { Component } from 'react';
import TodoItems from './TodoItems';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    
  }

  render () {
    return (
      <div className="App">{
        this.props.todos.map((todo) => (
          <TodoItems todo={todo}></TodoItems>
        ))
        }
        </div>
        );
      };
    };