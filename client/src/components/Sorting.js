import React from "react";
import {
  Input,
  InputLabel,
  MenuItem,
  TextField,
  Select,
  Button,
  List,
  ListItem,
  makeStyles,
  Paper,
  FormHelperText,
  FormControl,
} from "@material-ui/core/";

function Sorting({
  onSearch,
  searchTerm,
  handleSortByName,
  handleSortByType,
  showAllComponents,
}) {
  return (
    <>
      <form>
        <Input
          value={searchTerm}
          onChange={onSearch}
          type="text"
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
        />
      </form>
      <div>
        <strong>Sort by:</strong>
        <button onClick={handleSortByName}>Name</button>
        <button onClick={handleSortByType}>Type</button>
      </div>
      <div>
        <button onClick={showAllComponents}>Show all Components</button>
      </div>
    </>
  );
}

export default Sorting;
