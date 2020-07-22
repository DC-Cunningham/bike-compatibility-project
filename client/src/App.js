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
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import AdminRoute from "./components/routes/AdminRoute";

const useStyles = makeStyles((theme) => ({
  header: {
    height: "150px",
    marginLeft: theme.spacing(29),
    color: theme.palette.primary.contrastText,
    background: "linear-gradient(90deg, #ffffff 1%, #000000 100%)",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down(960)]: {
      height: "75px",
      marginLeft: theme.spacing(9),
      fontSize: theme.spacing(5),
    },
    [theme.breakpoints.down(620)]: {
      height: "75px",
      marginLeft: theme.spacing(5),
      fontSize: theme.spacing(3),
    },
  },
}));

function App() {
  const classes = useStyles();
  const [state, dispatch] = useStoreContext({
    user: {
      _id: 0,
      displayName: "",
      email: "",
      role: "",
      token: "",
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("User_Token");
    if (token) {
      API.getUserBasedOnToken(token).then((res) => {
        let currentUser = {
          displayName: res.data.name,
          email: res.data.email,
          role: res.data.role,
          token: token,
        };
        dispatch({ type: LOGIN_ACTION, currentUser });
      });
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
          <PublicRoute
            role={state.user.role}
            restricted={false}
            exact
            path="/"
            component={HomePage}
          />
          <PublicRoute
            role={state.user.role}
            restricted={false}
            exact
            path="/home"
            component={HomePage}
          />
          <PublicRoute
            role={state.user.role}
            restricted={false}
            exact
            path="/about"
            component={About}
          />
          <PrivateRoute
            role={state.user.role}
            exact
            path="/components"
            component={Components}
          />
          <AdminRoute
            role={state.user.role}
            exact
            path="/add_component"
            component={AddComponent}
          />
          <AdminRoute
            role={state.user.role}
            exact
            path="/edit_component"
            component={EditComponent}
          />
          <PublicRoute
            role={state.user.role}
            restricted={true}
            exact
            path="/signin"
            component={SignIn}
          />
          <PrivateRoute
            role={state.user.role}
            exact
            path="/signup"
            component={SignUp}
          />
          <PrivateRoute
            role={state.user.role}
            exact
            path="/account"
            component={Account}
          />
          <PublicRoute
            role={state.user.role}
            restricted={true}
            exact
            path="/password_reset"
            component={PasswordReset}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
