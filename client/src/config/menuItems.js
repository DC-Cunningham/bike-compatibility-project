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
import allThemes from "./themes";

import SettingsIcon from "@material-ui/icons/SettingsApplications";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ChromeReaderMode from "@material-ui/icons/ChromeReaderMode";
import StyleIcon from "@material-ui/icons/Style";

const getMenuItems = (props) => {
  const { appConfig, menuContext, themeContext, a2HSContext } = props;
  const { auth } = appConfig || {};
  const { themeID, setThemeID } = themeContext;
  const { isDesktop, isAuthMenuOpen, useMiniMode, setMiniMode } = menuContext;
  const { isAppInstallable, isAppInstalled, deferredPrompt } = a2HSContext;

  const isAuthorised = auth.isAuthenticated();
  const isAdmin = true;

  const themeItems = allThemes.map((t) => {
    return {
      value: undefined,
      visible: true,
      primaryText: { id: t.id },
      onClick: () => {
        setThemeID(t.id);
      },
      leftIcon: <StyleIcon style={{ color: t.color }} />,
    };
  });

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
      value: "/addcomponent",
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
      primaryText: "settings",
      primaryTogglesNestedList: true,
      leftIcon: <SettingsIcon />,
      nestedItems: [
        {
          primaryText: "theme",
          secondaryText: themeID,
          primaryTogglesNestedList: true,
          leftIcon: <StyleIcon />,
          nestedItems: themeItems,
        },
        {
          visible: isDesktop ? true : false,
          onClick: () => {
            setMiniMode(!useMiniMode);
          },
          primaryText: "menu_mini_mode",
          leftIcon: useMiniMode ? <MenuOpenIcon /> : <ChromeReaderMode />,
        },
      ],
    },
    {
      value: null,
      visible: isAppInstallable && !isAppInstalled,
      onClick: () => {
        deferredPrompt.prompt();
      },
      primaryText: {
        id: "install",
        defaultMessage: "Install",
      },
      leftIcon: <GetApp />,
    },
  ];
};
export default getMenuItems;
