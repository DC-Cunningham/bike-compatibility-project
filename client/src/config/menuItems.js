import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import LockIcon from "@material-ui/icons/Lock";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { logout } from "../utils/auth";
import SettingsIcon from "@material-ui/icons/SettingsApplications";
import GetApp from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";

const getMenuItems = (props) => {
  const { appConfig, menuContext, themeContext, a2HSContext } = props;
  const { auth } = appConfig || {};
  const { isDesktop, isAuthMenuOpen } = menuContext;
  const { themeID, setThemeID } = themeContext;
  const { isAppInstallable, isAppInstalled, deferredPrompt } = a2HSContext;

  const isAuthorised = auth.isAuthenticated();
  const isAdmin = true;

  if (isAuthMenuOpen || !isAuthorised) {
    return [
      {
        value: "/about",
        visible: true,
        primaryText: "About the Project",
        leftIcon: <InfoOutlined />,
      },
      {
        value: "/signin",
        onClick: isAuthorised ? logout : () => {},
        visible: true,
        primaryText: isAuthorised ? "Sign Out" : "Sign In",
        leftIcon: isAuthorised ? <ExitToAppIcon /> : <LockIcon />,
      },
    ];
  }
  console.log(auth);
  return [
    {
      value: "/home",
      visible: isAuthorised,
      primaryText: "home",
      leftIcon: <HomeIcon />,
    },
    {
      value: "/about",
      visible: isAuthorised,
      primaryText: "About the Project",
      leftIcon: <InfoOutlined />,
    },
    { divider: true },
    {
      value: "/components",
      visible: isAuthorised,
      primaryText: "Component Database",
      leftIcon: <DashboardIcon />,
    },
    { divider: true },
    {
      value: "/definecomponent",
      visible: isAdmin,
      primaryText: "Add a Component",
      leftIcon: <AddIcon />,
    },
    {
      value: null,
      visible: isAppInstallable && !isAppInstalled,
      onClick: () => {
        deferredPrompt.prompt();
      },
      primaryText: "Install",
      leftIcon: <GetApp />,
    },
  ];
};
export default getMenuItems;
