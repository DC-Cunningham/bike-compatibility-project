import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { makeStyles, CssBaseline, Container } from "@material-ui/core/";
// import Container from "../components/Container";
import Page from "material-ui-shell/lib/containers/Page/Page";
import Scrollbar from "material-ui-shell/lib/components/Scrollbar/Scrollbar";
import ComponentList from "../components/ComponentList";
import ComponentCard from "../components/ComponentCard";
import paperConfig from "../components/ComponentCard";

function Components() {
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

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        {formState.currentItemExists === true && (
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
        )}
        {formState.currentItemExists === false && (
          <ComponentList
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
      </Container>
    </>
  );
}

export default Components;
