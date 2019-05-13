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
      completed: false,
    },
    {
      id:3,
      title: "delete list items",
      completed: false,
    }
  ]
  }
  

  render () {
    return (
      <div className="App">
        <h1>Test</h1>
        <Todos todos={this.state.todos}>Todos</Todos>
      </div>
    );
  }
}
