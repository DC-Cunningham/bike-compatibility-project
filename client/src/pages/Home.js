import React from "react";
import Page from "material-ui-shell/lib/containers/Page/Page";
import Scrollbar from "material-ui-shell/lib/components/Scrollbar/Scrollbar";

const HomePage = () => {
  return (
    <Page pageTitle="Home">
      <Scrollbar
        style={{ height: "100%", width: "100%", display: "flex", flex: 1 }}
      >
        <p>This just needs a big logo</p>
      </Scrollbar>
    </Page>
  );
};
export default HomePage;
