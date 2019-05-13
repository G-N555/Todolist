import React, { Component } from 'react';
import './App.css';
import Todos from "./components/Todos";

export default class App extends Component {
  constructor(props) {
    super(props);

  }


  state = {
    todos: [
    {
      id:1,
      title: "to make list",
      completed: false,
    },
    {
      id:2,
      title: "create items",
      completed: true,
    },
    {
      id:3,
      title: "delete list items",
      completed: false,
    }
  ]
  }

  completed = (id) => {
    this.setState({ todos: this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    }) 
  });
};

  render () {
    return (
      <div className="App">
        <h1>Test</h1>
        <Todos completed={this.completed} todos={this.state.todos}></Todos>
      </div>
    );
  }
}
