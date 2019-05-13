import React, { Component } from 'react';
import '../App.css';

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    title: ''
  }

  submitItem = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({ title: '' });
  }

  //[e.taget.name] => in case need to add other info than "title"
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });


  render () {
    return (
        <form>
          <input 
            className="inputForm" 
            type="text" 
            name="title" 
            placeholder="What you shold do?"
            value={this.state.title}
            onChange={this.onChange}
          />
          <input 
            onClick={this.submitItem}
            className="submitBtn" 
            type="submit" 
            value="Submit" />
        </form>
        );
      };
    };