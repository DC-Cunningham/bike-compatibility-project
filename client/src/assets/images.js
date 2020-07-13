import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Brakes from "./Brakes.png";
import Frames from "./Frames.png";
import Forks from "./Forks.png";
import Cassette from "./Cassettes.png";
import Handlebar from "./Handlebars.png";
import Wheels from "./Wheels.png";

export default {
  Brakes: function () {
    return <Avatar src={Brakes} />;
  },
  Frame: function () {
    return <Avatar src={Frames} />;
  },
  Fork: function () {
    return <Avatar src={Forks} />;
  },
  Drivetrain: function () {
    return <Avatar src={Cassette} />;
  },
  Cockpit: function () {
    return <Avatar src={Handlebar} />;
  },
  Wheel: function () {
    return <Avatar src={Wheels} />;
  },
};
