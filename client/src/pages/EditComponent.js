import React, { useState, useEffect } from "react";
import { Box, makeStyles, Paper, Typography } from "@material-ui/core/";
import Page from "material-ui-shell/lib/containers/Page/Page";
import Scrollbar from "material-ui-shell/lib/components/Scrollbar/Scrollbar";
import LinkComponentForm from "../components/LinkComponentForm";
import SubmitComponentForm from "../components/SubmitComponentForm";
import ComponentCard from "../components/ComponentCard";
import API from "../utils/API";
import ComponentList from "../components/ComponentList";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(620 + theme.spacing(6))]: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
  },
  avatar: {
    margin: theme.spacing(1),
    width: 192,
    height: 192,
    color: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
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
  },
}));

function EditComponent() {
  const [formState, setFormState] = useState({
    items: [],
    currentItem: {},
    formStep: 1,
  });
  const classes = useStyles();

  useEffect(() => {
    API.getComponents()
      .then((res) => setFormState({ items: res.data, formStep: 1 }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Page pageTitle="Edit a component">
      <Scrollbar
        style={{ height: "100%", width: "100%", display: "flex", flex: 1 }}
      >
        <Paper className={classes.paper} elevation={6}>
          {formState.formStep === 1 && (
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
          )}
          {formState.formStep === 2 && (
            <LinkComponentForm
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
            />
          )}
          {formState.formStep === 3 && (
            <LinkComponentForm
              name=" an influence"
              relationship="influencers"
              items={formState.items}
              currentItem={formState.currentItem}
              setFormState={(value) =>
                setFormState({
                  ...formState,
                  currentItem: { ...formState.currentItem, ...value },
                  formStep: 4,
                })
              }
            />
          )}
          {formState.formStep === 4 && (
            <SubmitComponentForm
              items={formState.items}
              term="edited"
              currentItem={formState.currentItem}
              setFormState={(value) =>
                setFormState({
                  ...formState,
                  currentItem: { ...formState.currentItem, ...value },
                  formStep: 5,
                })
              }
            />
          )}
          {formState.formStep === 5 && (
            <>
              <Box textAlign="center">
                <Typography variant="h3">
                  Your Component has been Submitted
                </Typography>
              </Box>
              <ComponentCard
                currentItem={formState.currentItem}
              ></ComponentCard>
            </>
          )}
        </Paper>
      </Scrollbar>
    </Page>
  );
}

export default EditComponent;
