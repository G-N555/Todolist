import React, { Component } from 'react';
import TodoItems from './TodoItems';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


export default class Todos extends Component {

  render () {
    return (
      <Container>
      <Row>
      <Col>
      <div className="todos">{
        this.props.todos.map((todo) => (
          <Col>
          <TodoItems 
            delItem={this.props.delItem} 
            completed={this.props.completed} 
            key={todo.id} 
            todo={todo}>
          </TodoItems>
          </Col>
        ))
      }
      </div>
      </Col>
      </Row>
    </Container>
        );
      };
    };
    