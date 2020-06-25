import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, Select, FormBtn } from "../components/Form";

function Components() {
  // Setting our component's initial state
  const [components, setComponents] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all components and store them with setComponents
  useEffect(() => {
    loadComponents();
  }, []);

  // Loads all components and sets them to components
  function loadComponents() {
    API.getComponents()
      .then((res) => setComponents(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a component from the database with a given id, then reloads components from the db
  function deleteComponent(id) {
    API.deleteComponent(id)
      .then((res) => loadComponents())
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.savecomponent method to save the component data
  // Then reload components from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.type && formObject.manufacturerSKU) {
      API.saveComponent({
        name: formObject.name,
        type: formObject.type,
        manufacturerSKU: formObject.manufacturerSKU,
        description: formObject.description,
      })
        .then((res) => loadComponents())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Do you have a component that you would like to add?</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="name"
              placeholder="Title (required)"
            />
            {/* <Input
              onChange={handleInputChange}
              name="type"
              placeholder="Component Type (required)"
            /> */}
            <Select
              onChange={handleInputChange}
              name="type"
              placeholder="Component Type (required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="description"
              placeholder="Description (Optional)"
            />
            <FormBtn
              disabled={!(formObject.name && formObject.type)}
              onClick={handleFormSubmit}
            >
              Submit Component
            </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Saved Components</h1>
          </Jumbotron>
          {components.length ? (
            <List>
              {components.map((component) => (
                <ListItem key={component._id}>
                  <Link to={"/components/" + component._id}>
                    <strong>
                      {component.name} in {component.type}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteComponent(component._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Components;
