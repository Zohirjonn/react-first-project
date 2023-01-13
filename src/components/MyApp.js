import React from "react";
import { Container, Row, Col, Alert } from "reactstrap";
import "./MyApp.css";

function MyApp() {
  return (
    <Container id="n1">
      <Row>
        <Col>
          <div>
            <Alert color="light">
              <h1>This is MyApp component</h1>
            </Alert>
          </div>
        </Col>
      </Row>
    </Container>
    // (
    //   <div id="n1">
    //     <h1>Hello React </h1>
    //   </div>
    // )
  );
}
export default MyApp;
