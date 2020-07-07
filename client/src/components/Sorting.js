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
  handleInputChange,
  loadComponents,
}) {
  return (
    <>
      <form>
        <Input
          value={searchTerm}
          onChange={onSearch}
          onSubmit={handleInputChange}
          variant="outlined"
          margin="normal"
          fullWidth
          id="component"
          label="Filter components by name"
          name="component"
          color="secondary"
        />

        {/* <input
          value={searchTerm}
          onChange={onSearch}
          type="text"
          placeholder="search by component name"
        /> */}
      </form>
      <div>
        <strong>Sort by:</strong>
        <button onClick={handleSortByName}>Name</button>
        <button onClick={handleSortByType}>Type</button>
      </div>
      <div>
        <button onClick={loadComponents}>Clear All Filters</button>
      </div>
    </>
  );
}

export default Sorting;
