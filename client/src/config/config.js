import React, { lazy } from "react";
import routes from "./routes";
import { isAuthorised } from "../utils/auth";
import { getAuth } from "../utils/auth";
import getMenuItems from "./menuItems";
import themes from "./themes";

const config = {
  auth: {
    isAuthenticated: isAuthorised,
    getData: () => {
      return getAuth();
    },
    signInURL: "/signin",
  },
  routes,
  menu: {
    getMenuItems,
  },
  theme: {
    themes,
    defaultThemeID: "default",
    defaultType: "dark",
  },
  pages: {
    LandingPage: lazy(() => import("../pages/LandingPage")),
    PageNotFound: lazy(() => import("../pages/PageNotFound")),
  },
};

export default config;
