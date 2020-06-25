import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [component, setComponent] = useState({});

  // When this component mounts, grab the component with the _id of props.match.params.id
  const { id } = useParams();
  useEffect(() => {
    API.getComponent(id)
      .then((res) => setComponent(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>{component.name}</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Description</h1>
            <p>{component.description}</p>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/">← Back to Components</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
