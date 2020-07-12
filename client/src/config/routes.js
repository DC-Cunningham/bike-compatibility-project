/* eslint-disable react/jsx-key */
import React, { lazy } from "react";
import PrivateRoute from "base-shell/lib/components/PrivateRoute/PrivateRoute";
import PublicRoute from "base-shell/lib/components/PublicRoute/PublicRoute";
import { Route } from "react-router-dom";

const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const PasswordReset = lazy(() => import("../pages/PasswordReset"));
const About = lazy(() => import("../pages/About"));
const Home = lazy(() => import("../pages/Home"));
const Components = lazy(() => import("../pages/Components"));
const AddComponent = lazy(() => import("../pages/AddComponent"));
const EditComponent = lazy(() => import("../pages/EditComponent"));
const Account = lazy(() => import("../pages/Account"));

const routes = [
  <PublicRoute path="/signin" redirectTo="/" exact component={SignIn} />,
  <PublicRoute path="/signup" redirectTo="/" exact component={SignUp} />,
  <Route
    path="/password_reset"
    redirectTo="/"
    exact
    component={PasswordReset}
  />,
  <PublicRoute path="/about" exact component={About} />,
  <PrivateRoute path="/home" exact component={Home} />,
  <PrivateRoute path="/components" exact component={Components} />,
  <PrivateRoute path="/addcomponent" exact component={AddComponent} />,
  <PrivateRoute path="/editcomponent" exact component={EditComponent} />,
  <PrivateRoute path="/account" exact component={Account} />,
];

export default routes;
