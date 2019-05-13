import React, { Component } from 'react';
import '../App.css';

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  test = () => {
    console.log("hello");
  }

  render () {
    return(
      <div className="todoList">
        <input type="submit" onClick={this.test}/>
      </div>
    )
  }

};