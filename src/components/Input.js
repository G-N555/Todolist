import React, { Component } from 'react';
import '../App.css';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


export default class Input extends Component {

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
      <Container>
            <Row>
            <form>
            <Col>
              <input 
                className="inputForm" 
                type="text" 
                name="title" 
                placeholder="Input Your ToDo !"
                value={this.state.title}
                onChange={this.onChange}
              />
              <input 
                onClick={this.submitItem}
                className="submitBtn" 
                type="submit" 
                value="Submit" />
            </Col>
            </form>
            </Row>
      </Container>
      );
    };
  };