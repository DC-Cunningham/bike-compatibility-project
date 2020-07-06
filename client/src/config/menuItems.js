import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import LockIcon from "@material-ui/icons/Lock";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { logout } from "../utils/auth";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/SettingsApplications";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import GetApp from "@material-ui/icons/GetApp";
import ChromeReaderMode from "@material-ui/icons/ChromeReaderMode";
import StyleIcon from "@material-ui/icons/Style";
import allThemes from "./themes";

const getMenuItems = (props) => {
  const { appConfig, intl, menuContext, themeContext, a2HSContext } = props;
  const { auth } = appConfig || {};
  const { isDesktop, isAuthMenuOpen } = menuContext;
  const { themeID, setThemeID } = themeContext;
  const { isAppInstallable, isAppInstalled, deferredPrompt } = a2HSContext;

  const isAuthorised = auth.isAuthenticated();

  if (isAuthMenuOpen || !isAuthorised) {
    return [
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
      primaryText: "Settings",
      primaryTogglesNestedList: true,
      leftIcon: <SettingsIcon />,
      nestedItems: [
        {
          value: "/account",
          visible: isAuthorised,
          primaryText: "Account",
          leftIcon: <DashboardIcon />,
        },
      ],
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
