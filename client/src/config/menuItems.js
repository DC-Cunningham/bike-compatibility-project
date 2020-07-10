import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import LockIcon from "@material-ui/icons/Lock";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { logout } from "../utils/auth";
import EditIcon from "@material-ui/icons/Edit";
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
  return [
    {
      value: "/home",
      visible: isAuthorised,
      primaryText: "home",
      leftIcon: <HomeIcon />,
    },
    {
      value: "/about",
      visible: true,
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
      visible: isAdmin,
      primaryText: "Admin",
    },
    {
      value: "/definecomponent",
      visible: isAdmin,
      primaryText: "Add a Component",
      leftIcon: <AddIcon />,
    },
    {
      value: "/editcomponent",
      visible: isAdmin,
      primaryText: "Edit a Component",
      leftIcon: <EditIcon />,
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
