// import React, { Component } from "react";
// import App from "base-shell/lib";
// import { render } from "react-dom";
// import MUIConfig from "material-ui-shell/lib";
// import merge from "base-shell/lib/utils/config";
// import { ComponentStore } from "./utils/GlobalState";
// import _config from "./config";

// const config = merge(MUIConfig, _config);

// export default class Demo extends Component {
//   render() {
//     return (
//       <ComponentStore>
//         <App config={config} />
//       </ComponentStore>
//     );
//   }
// }
import React, { Component, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";
import Menu from "./components/Menu";
import { UserStore } from "./utils/UserState";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/Home";
import EditComponent from "./pages/EditComponent";
import AddComponent from "./pages/AddComponent";
import Components from "./pages/Components";
import PasswordReset from "./pages/PasswordReset";
import PageNotFound from "./pages/PageNotFound";
import Account from "./pages/Account";
import TBCPIcon from "./assets/TheBikeCompatibilityProject-Icon-W_200x200.png";

const useStyles = makeStyles((theme) => ({
  header: {
    height: theme.spacing(14),
    padding: theme.spacing(2),
    color: theme.palette.primary.contrastText,
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: `100%`,
    [theme.breakpoints.down(620)]: {
      fontSize: theme.spacing(4),
    },
  },
  icon: {
    [theme.breakpoints.down(620)]: {
      width: 100,
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div>
        <UserStore>
          <Typography
            className={classes.header}
            color="secondary"
            variant="h2"
            display="block"
            align="center"
          >
            <img src={TBCPIcon} className={classes.icon} />
            The Bike Compatibility Project
          </Typography>
          <Menu />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/components" component={Components} />
            <Route exact path="/add_component" component={AddComponent} />
            <Route exact path="/edit_component" component={EditComponent} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/password_reset" component={PasswordReset} />
            <Route component={PageNotFound} />
          </Switch>
        </UserStore>
      </div>
    </BrowserRouter>
  );
}

export default App;
