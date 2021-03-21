import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "120px",
    height: "100%",
    backgroundColor: "#253053",
  },
});

const SideMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.sideMenu}>
      <h3>Material UI</h3>
    </div>
  );
};

export default SideMenu;
