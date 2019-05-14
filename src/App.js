import React, { Component } from 'react';
import './App.css';
import Todos from "./components/Todos";
import Input from "./components/Input";
import uuid from 'uuid';
import { Container } from 'react-bootstrap';



export default class App extends Component {
  state = {
    todos: [
    {
      id: uuid.v4(),
      title: "sample 1",
      completed: false,
    },
    {
      id: uuid.v4(),
      title: "sample 2",
      completed: false,
    },
    {
      id: uuid.v4(),
      title: "sample 3",
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
    if(title !== ''){
    this.setState({ todos: [...this.state.todos, newTodo] });
    }
  } 

  render () {
    return (
      <Container>
        <div className="App">
          <h1>TO DO LIST!</h1>
          <Input addItem={this.addItem} />
          <Todos delItem={this.delItem} completed={this.completed} todos={this.state.todos}/>
        </div>
      </Container>
    );
  }
}
