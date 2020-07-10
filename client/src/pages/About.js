import React from "react";
import Page from "material-ui-shell/lib/containers/Page/Page";
import Scrollbar from "material-ui-shell/lib/components/Scrollbar/Scrollbar";

const About = () => {
  return (
    <Page pageTitle="About the Project">
      <Scrollbar
        style={{ height: "100%", width: "100%", display: "flex", flex: 1 }}
      >
        <p>This is an about page</p>
      </Scrollbar>
    </Page>
  );
};
export default About;
