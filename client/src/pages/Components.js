import React, { useState, useEffect } from "react";
import API from "../utils/API";
import {
  Box,
  Button,
  CssBaseline,
  Container,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core/";
import ComponentList from "../components/ComponentList";
import ComponentCard from "../components/ComponentCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "auto",
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(24),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
    [theme.breakpoints.down(960)]: {
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(0),
    },
    [theme.breakpoints.down(620)]: {
      marginLeft: theme.spacing(4),
    },
  },
  form: {
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: `100%`,
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    padding: `${theme.spacing(8)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
    [theme.breakpoints.down(960)]: {
      width: "auto",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      paddingTop: theme.spacing(1),
    },
  },
  type: {
    [theme.breakpoints.down(960)]: {
      fontSize: theme.spacing(1),
    },
  },
}));

function Components() {
  const classes = useStyles();
  const [formState, setFormState] = useState({
    items: [],
    currentItem: {},
    currentItemExists: false,
  });

  useEffect(() => {
    API.getComponents()
      .then((res) =>
        setFormState({ items: res.data, currentItemExists: false })
      )
      .catch((err) => console.log(err));
  }, []);

  const handleBackClick = (event) => {
    API.getComponents()
      .then((res) =>
        setFormState({ items: res.data, currentItemExists: false })
      )
      .catch((err) => console.log(err));
  };

  return (
    <>
      <CssBaseline />
      <Box>
        <Container maxWidth="md">
          <Paper className={classes.paper} elevation={6}>
            <Typography className={classes.type} align="center" variant="h4">
              Component Database
            </Typography>
            {formState.currentItemExists === true && (
              <>
                <ComponentCard
                  items={formState.items}
                  currentItem={formState.currentItem}
                  resetFormState={(values) =>
                    setFormState({
                      ...formState,
                      currentItem: {},
                      currentItemExists: false,
                    })
                  }
                  setFormState={(values) =>
                    setFormState({
                      ...formState,
                      currentItem: { ...formState.currentItem, ...values },
                      currentItemExists: true,
                    })
                  }
                />
                <Button
                  className={classes.type}
                  variant="contained"
                  color="primary"
                  onClick={(event) => handleBackClick()}
                >
                  Back to the database
                </Button>
              </>
            )}
            {formState.currentItemExists === false && (
              <ComponentList
                className={classes.type}
                items={formState.items}
                setFormState={(values) =>
                  setFormState({
                    ...formState,
                    currentItem: { ...formState.currentItem, ...values },
                    currentItemExists: true,
                  })
                }
              />
            )}
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default Components;
