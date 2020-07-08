import React, { Component } from "react";
import { render } from "react-dom";
import App from "base-shell/lib";
import MUIConfig from "material-ui-shell/lib";
import merge from "base-shell/lib/utils/config";
import { StoreProvider } from "./utils/GlobalState";
import _config from "./config";

const config = merge(MUIConfig, _config);

export default class Demo extends Component {
  render() {
    return (
      <StoreProvider>
        <App config={config} />
      </StoreProvider>
    );
  }
}
