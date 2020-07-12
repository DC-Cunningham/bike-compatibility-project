import React, { useRef, useState, useContext, useEffect } from "react";
import MenuContext from "material-ui-shell/lib/providers/Menu/Context";
import { useStoreContext } from "../utils/GlobalState";
import Search from "./Search";
import {
  Select,
  FormHelperText,
  MenuItem,
  Button,
  TextField,
} from "@material-ui/core/";

function EditComponentForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Find the component to edit</h1>
      <form onSubmit={handleSubmit}>
        <Search items={props.items}> </Search>
      </form>
    </div>
  );
}

export default EditComponentForm;
