import React from "react";
import { Button, withWidth } from "@material-ui/core";

function ResponsiveButton({ width }) {
  // This is equivalent to theme.breakpoints.down("sm")
  const isSmallScreen = /xs|sm/.test(width);
  const buttonProps = {
    variant: isSmallScreen ? "text" : "outlined",
    size: isSmallScreen ? "small" : "large",
  };
  return (
    <Button {...buttonProps} variant="outlined" color="secondary">
      Select
    </Button>
  );
}

export default withWidth()(ResponsiveButton);
