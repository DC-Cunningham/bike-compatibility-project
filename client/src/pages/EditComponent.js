import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core/";
import RefineComponentForm from "../components/RefineComponentForm";
import LinkComponentForm from "../components/LinkComponentForm";
import SubmitComponentForm from "../components/SubmitComponentForm";
import ComponentCard from "../components/ComponentCard";
import API from "../utils/API";
import ComponentList from "../components/ComponentList";

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
      fontSize: theme.spacing(3),
    },
  },
}));

function EditComponent() {
  const classes = useStyles();
  const [formState, setFormState] = useState({
    items: [],
    currentItem: {},
    formStep: 1,
  });

  useEffect(() => {
    API.getComponents()
      .then((res) => setFormState({ items: res.data, formStep: 1 }))
      .catch((err) => console.log(err));
  }, []);

  const handleBackClick = () => {
    API.getComponents()
      .then((res) => {
        setFormState({ items: res.data, formStep: 1 });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <CssBaseline />
      <Box>
        <Container maxWidth="md">
          <Paper className={classes.paper} elevation={6}>
            {formState.formStep === 1 && (
              <>
                <Typography
                  className={classes.type}
                  align="center"
                  variant="h3"
                >
                  Please select a component to edit
                </Typography>
                <ComponentList
                  items={formState.items}
                  setFormState={(values) =>
                    setFormState({
                      ...formState,
                      currentItem: { ...formState.currentItem, ...values },
                      formStep: 2,
                    })
                  }
                />
              </>
            )}
            {formState.formStep === 2 && (
              <>
                <RefineComponentForm
                  name="a point of contact"
                  relationship="pointsOfContact"
                  items={formState.items}
                  currentItem={formState.currentItem}
                  setFormState={(values) =>
                    setFormState({
                      ...formState,
                      currentItem: { ...formState.currentItem, ...values },
                      formStep: 3,
                    })
                  }
                  resetFormState={() =>
                    setFormState({
                      ...formState,
                      currentItem: {},
                      formStep: 1,
                    })
                  }
                />
              </>
            )}
            {formState.formStep === 3 && (
              <>
                <LinkComponentForm
                  name="a point of contact"
                  relationship="pointsOfContact"
                  items={formState.items}
                  currentItem={formState.currentItem}
                  setFormState={(values) =>
                    setFormState({
                      ...formState,
                      currentItem: { ...formState.currentItem, ...values },
                      formStep: 4,
                    })
                  }
                  resetFormState={(values) =>
                    setFormState({
                      ...formState,
                      currentItem: { ...formState.currentItem, ...values },
                      formStep: 2,
                    })
                  }
                />
              </>
            )}
            {formState.formStep === 4 && (
              <>
                <LinkComponentForm
                  name=" an influence"
                  relationship="influencers"
                  items={formState.items}
                  currentItem={formState.currentItem}
                  setFormState={(values) =>
                    setFormState({
                      ...formState,
                      currentItem: { ...formState.currentItem, ...values },
                      formStep: 5,
                    })
                  }
                  resetFormState={(values) =>
                    setFormState({
                      ...formState,
                      currentItem: { ...formState.currentItem, ...values },
                      formStep: 3,
                    })
                  }
                />
              </>
            )}
            {formState.formStep === 5 && (
              <>
                <SubmitComponentForm
                  items={formState.items}
                  term="edited"
                  currentItem={formState.currentItem}
                  setFormState={(values) =>
                    setFormState({
                      ...formState,
                      currentItem: { ...formState.currentItem, ...values },
                      formStep: 6,
                    })
                  }
                  resetFormState={(values) =>
                    setFormState({
                      ...formState,
                      currentItem: { ...formState.currentItem, ...values },
                      formStep: 4,
                    })
                  }
                />
              </>
            )}
            {formState.formStep === 6 && (
              <>
                <Box textAlign="center">
                  <Typography variant="h3">
                    Your Component has been Submitted
                  </Typography>
                </Box>
                <ComponentCard
                  currentItem={formState.currentItem}
                  resetFormState={(values) =>
                    setFormState({
                      ...formState,
                      currentItem: { ...formState.currentItem, ...values },
                      formStep: 1,
                    })
                  }
                ></ComponentCard>
                <Button
                  align="left"
                  variant="contained"
                  color="primary"
                  onClick={(event) => handleBackClick()}
                >
                  Edit another Component
                </Button>
              </>
            )}
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default EditComponent;
