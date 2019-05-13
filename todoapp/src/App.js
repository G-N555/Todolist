import React, { Component } from 'react';
import './App.css';
import Todos from "./components/Todos";
import Input from "./components/Input";
import uuid from 'uuid';


export default class App extends Component {
  constructor(props) {
    super(props);
  }


  state = {
    todos: [
    {
      id: uuid.v4(),
      title: "to make list",
      completed: false,
    },
    {
      id: uuid.v4(),
      title: "create items",
      completed: false,
    },
    {
      id: uuid.v4(),
      title: "delete list items",
      completed: false,
    }
  ]
  }

  //toggle completed item
  completed = (id) => {
    this.setState({ todos: this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    }) 
  });
};

  //delete item
  delItem = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  //add item
  addItem = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  } 

  render () {
    return (
      <div className="App">
        <h1>Test</h1>
        <Input addItem={this.addItem} />
        <Todos delItem={this.delItem} completed={this.completed} todos={this.state.todos}/>
      </div>
    );
  }
}
