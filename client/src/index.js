import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserState } from "./utils/UserState";

ReactDOM.render(
  <UserState>
    <App />
  </UserState>,
  document.getElementById("root")
);
