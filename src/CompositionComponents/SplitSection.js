import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class SplitSection extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>{this.props.child1}</Col>
          <Col>{this.props.child2}</Col>
        </Row>
      </Container>
    );
  }
}
