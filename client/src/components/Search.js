import React, { useState, useEffect } from "react";
import { TextField, Button, FormControl } from "@material-ui/core/";
import ComponentList from "./ComponentList";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sorted, setSorted] = useState(false);
  const [filteredComponents, setFilteredComponents] = useState([]);

  useEffect(() => {
    showAllComponents();
  }, [1]);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    const filtered = props.items.filter((component) =>
      component.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredComponents(filtered);
  }

  function showAllComponents() {
    setFilteredComponents(props.items);
  }

  return (
    <>
      <FormControl fullWidth>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={showAllComponents}
        >
          Show all Components
        </Button>
        <br />
        <TextField
          value={searchTerm}
          label="Filter"
          variant="outlined"
          onChange={handleSearch}
          type="text"
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
        />
        <br />
      </FormControl>
      <ComponentList
        components={filteredComponents}
        onClick={props.handleSubmit}
      />
    </>
  );
}

export default Search;
