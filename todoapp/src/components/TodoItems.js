import React, { Component } from 'react';

export default class TodoItems extends Component {
  constructor(props) {
    super(props);
    
  }

  render () {
    return(
      <h1>{this.props.todo.title}</h1>
    )
  }
};