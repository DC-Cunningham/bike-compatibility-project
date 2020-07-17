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
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  header: {
    height: "100%",
    padding: theme.spacing(2),
    color: theme.palette.primary.contrastText,
    background: "linear-gradient(90deg, #ffffff 10%, #000000 100%)",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: theme.spacing(30),
    [theme.breakpoints.down(960)]: {
      height: "75px",
      paddingLeft: theme.spacing(10),
      fontSize: theme.spacing(3),
    },
  },
}));

function App() {
  const classes = useStyles();
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    const token = localStorage.getItem("User_Token");
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
        <Menu />
        <Typography
          className={classes.header}
          color="secondary"
          variant="h2"
          display="block"
          align="center"
        >
          The Bike Compatibility Project
        </Typography>
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
