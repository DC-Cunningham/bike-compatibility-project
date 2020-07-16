import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import { NavLink, useHistory } from "react-router-dom";
import { useStoreContext } from "../utils/UserState";
import API from "../utils/API";
import { LOGOUT_ACTION } from "../utils/actions";
import { Hidden, Tab } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import StorageIcon from "@material-ui/icons/Storage";
import AddBoxIcon from "@material-ui/icons/AddBox";
import EditIcon from "@material-ui/icons/Edit";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100vh",
  },
  tabs: {
    borderRight: `3px solid ${theme.palette.divider}`,
  },
  tab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(3),
    backgroundColor: theme.palette.primary,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const history = useHistory();
  const [state, dispatch] = useStoreContext();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  function logout(event) {
    event.preventDefault();
    console.log(event);
    API.logoutAPI();
    dispatch({ type: LOGOUT_ACTION });
    history.push("/");
  }

  const signinMenu = () => {
    if (state.user.role === "admin") {
      return (
        <>
          <NavLink
            className={classes.tab}
            to="/home"
            style={{
              color: "black",
            }}
            style={{
              color: "black",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            <Hidden smDown>
              <Tab
                disableFocusRipple
                indicatorColor="primary"
                label="Home"
                textColorPrimary
              />
            </Hidden>
            <Hidden mdUp>
              <HomeIcon />
            </Hidden>
          </NavLink>
          <NavLink
            className={classes.tab}
            to="/about"
            style={{
              color: "black",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            <Hidden smDown>
              <Tab label="About" />
            </Hidden>
            <Hidden mdUp>
              <InfoOutlined />
            </Hidden>
          </NavLink>
          <NavLink
            className={classes.tab}
            to="/components"
            style={{
              color: "black",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            <Hidden smDown>
              <Tab label="Component Database" />
            </Hidden>
            <Hidden mdUp>
              <StorageIcon />
            </Hidden>
          </NavLink>
          <NavLink
            className={classes.tab}
            to="/add_component"
            style={{
              color: "black",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            <Hidden smDown>
              <Tab label="Add a Component" />
            </Hidden>
            <Hidden mdUp>
              <AddBoxIcon />
            </Hidden>
          </NavLink>
          <NavLink
            className={classes.tab}
            to="/edit_component"
            style={{
              color: "black",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            <Hidden smDown>
              <Tab label="Edit a Component" />
            </Hidden>
            <Hidden mdUp>
              <EditIcon />
            </Hidden>
          </NavLink>
          <NavLink
            className={classes.tab}
            to="/account"
            style={{
              color: "black",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            <Hidden smDown>
              <Tab label="Account" />
            </Hidden>
            <Hidden mdUp>
              <AccountBoxIcon />
            </Hidden>
          </NavLink>
          <Hidden smDown>
            <Tab label="Logout" onClick={logout} />
          </Hidden>
          <Hidden mdUp>
            <div className={classes.tab}>
              <ExitToAppIcon />
            </div>
          </Hidden>
        </>
      );
    } else if (state.user.role === "user") {
      return (
        <>
          <NavLink
            className={classes.tab}
            to="/home"
            style={{
              color: "black",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            <Hidden smDown>
              <Tab label="Home" />
            </Hidden>
            <Hidden mdUp>
              <HomeIcon />
            </Hidden>
          </NavLink>
          <NavLink
            className={classes.tab}
            to="/about"
            style={{
              color: "black",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            <Hidden smDown>
              <Tab label="About" />
            </Hidden>
            <Hidden mdUp>
              <InfoOutlined />
            </Hidden>
          </NavLink>
          <NavLink
            className={classes.tab}
            to="/components"
            style={{
              color: "black",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            <Hidden smDown>
              <Tab label="Component Database" />
            </Hidden>
            <Hidden mdUp>
              <StorageIcon />
            </Hidden>
          </NavLink>
          <NavLink
            className={classes.tab}
            to="/account"
            style={{
              color: "black",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            <Hidden smDown>
              <Tab label="Account" />
            </Hidden>
            <Hidden mdUp>
              <AccountBoxIcon />
            </Hidden>
          </NavLink>
          <Hidden smDown>
            <Tab className={classes.logout} label="Logout" onClick={logout} />
          </Hidden>
          <Hidden mdUp>
            <div className={classes.tab}>
              <ExitToAppIcon />
            </div>
          </Hidden>
        </>
      );
    } else {
      return (
        <>
          <NavLink
            className={classes.tab}
            to="/home"
            style={{
              color: "black",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            <Hidden smDown>
              <Tab label="Home" />
            </Hidden>
            <Hidden mdUp>
              <HomeIcon />
            </Hidden>
          </NavLink>
          <NavLink
            className={classes.tab}
            to="/about"
            style={{
              color: "black",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            <Hidden smDown>
              <Tab label="About" />
            </Hidden>
            <Hidden mdUp>
              <InfoOutlined />
            </Hidden>
          </NavLink>
          <NavLink
            className={classes.tab}
            to="/signin"
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
              indicatorStyle: "",
            }}
          >
            <Hidden smDown>
              <Tab label="Sign In" />
            </Hidden>
            <Hidden mdUp>
              <AccountBoxIcon />
            </Hidden>
          </NavLink>
        </>
      );
    }
  };

  return (
    <div className={classes.root}>
      <Tabs
        TabIndicatorProps={{
          style: {
            height: "0px",
          },
        }}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Menu tabs"
        className={classes.tabs}
      >
        {signinMenu()}
      </Tabs>
    </div>
  );
}
