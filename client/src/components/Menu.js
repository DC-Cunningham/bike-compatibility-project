import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import { NavLink } from "react-router-dom";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HomeIcon from "@material-ui/icons/Home";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100vh",
  },
  tabs: {
    borderRight: `2px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <NavLink
          to="/home"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          <Tab label="Home" {...a11yProps(0)} />
        </NavLink>
        <NavLink
          to="/about"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          <Tab label="About" {...a11yProps(1)}></Tab>
        </NavLink>
        <NavLink
          to="/components"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          <Tab label="Component Database" {...a11yProps(2)} />
        </NavLink>
        <NavLink
          to="/add_component"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          <Tab label="Add a Component" {...a11yProps(3)} />
        </NavLink>
        <NavLink
          to="/edit_component"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          <Tab label="Edit a Component" {...a11yProps(4)} />
        </NavLink>
        <NavLink
          to="/account"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          <Tab label="Account" {...a11yProps(5)} />
        </NavLink>
        <NavLink
          to="/signin"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          <Tab label="SignIn" {...a11yProps(6)} />
        </NavLink>
      </Tabs>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
      <TabPanel value={value} index={4}></TabPanel>
      <TabPanel value={value} index={5}></TabPanel>
      <TabPanel value={value} index={6}></TabPanel>
    </div>
  );
}
