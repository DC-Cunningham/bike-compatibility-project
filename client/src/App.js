import React, { Component, useEffect, useState } from "react";
import { render } from "react-dom";
import App from "base-shell/lib";
import MUIConfig from "material-ui-shell/lib";
import merge from "base-shell/lib/utils/config";
import { ComponentStore } from "./utils/GlobalState";
import _config from "./config";
import API from "./utils/API";

const config = merge(MUIConfig, _config);

export default class Demo extends Component {
  render() {
    return (
      <ComponentStore>
        <App config={config} />
      </ComponentStore>
    );
  }
}
