import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";
import Menu from "./components/Menu";
import { useStoreContext } from "./utils/UserState";
import API from "./utils/API";
import { LOGIN_ACTION } from "./utils/actions";
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
    height: "100%",
    padding: theme.spacing(2),
    color: theme.palette.primary.contrastText,
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    const token = localStorage.getItem("User_Token");
    console.log(token);
    if (token) {
      API.getUserBasedOnToken(token).then((res) => {
        console.log(res);
        let currentUser = {
          displayName: res.data.name,
          role: res.data.role,
          token: token,
        };
        dispatch({ type: LOGIN_ACTION, currentUser });
      });
    } else {
      return null;
    }
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Typography
          className={classes.header}
          color="secondary"
          variant="h2"
          display="block"
          align="center"
        >
          <img src={TBCPIcon} className={classes.icon} alt="Project Icon" />
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
      </div>
    </BrowserRouter>
  );
}

export default App;
