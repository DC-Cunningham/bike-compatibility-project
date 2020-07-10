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
        <Button onClick={handleSortByName}>Name</Button>
        <Button onClick={handleSortByType}>Type</Button>
      </div>
      <div>
        <Button onClick={showAllComponents}>Show all Components</Button>
      </div>
    </>
  );
}

export default Sorting;
