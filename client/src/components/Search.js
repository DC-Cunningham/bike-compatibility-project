import React, { useState } from "react";
import { Input, Button } from "@material-ui/core/";
import ComponentList from "./ComponentList";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sorted, setSorted] = useState(false);
  const [filteredComponents, setFilteredComponents] = useState([]);

  function handleSortByName() {
    if (!sorted) {
      setFilteredComponents(
        props.items.sort((a, b) => (a.name > b.name ? 1 : -1))
      );
      setSorted(true);
    } else {
      setFilteredComponents(
        props.items.sort((a, b) => (a.name > b.name ? -1 : 1))
      );
      setSorted(false);
    }
  }

  function handleSortByType() {
    if (!sorted) {
      setFilteredComponents(
        props.items.sort((a, b) => (a.type > b.type ? 1 : -1))
      );
      setSorted(true);
    } else {
      setFilteredComponents(
        props.items.sort((a, b) => (a.type > b.type ? -1 : 1))
      );
      setSorted(false);
    }
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    const filtered = props.items.filter((component) =>
      component.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(filtered);
    setFilteredComponents(filtered);
  }

  function showAllComponents() {
    setFilteredComponents(props.items);
  }

  return (
    <>
      <form>
        <Input
          value={searchTerm}
          onChange={handleSearch}
          type="text"
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
        />
      </form>
      <div>
        <strong>Sort by:</strong>
        <Button onClick={handleSortByName}>Name</Button>
        <Button onClick={handleSortByType}>Type</Button>
      </div>
      <div>
        <Button onClick={showAllComponents}>Show all Components</Button>
      </div>
      <ComponentList components={filteredComponents} />
    </>
  );
}

export default Search;
