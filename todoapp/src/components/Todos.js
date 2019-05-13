import React, { Component } from 'react';
import TodoItems from './TodoItems';


export default class Todos extends Component {
  constructor(props) {
    super(props);
    
  }

  render () {
    return (
      <div className="todos">{
        this.props.todos.map((todo) => (
          <TodoItems 
            delItem={this.props.delItem} 
            completed={this.props.completed} 
            key={todo.id} 
            todo={todo}>
          </TodoItems>
        ))
        }
      </div>
        );
      };
    };
    