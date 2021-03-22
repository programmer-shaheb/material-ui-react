import { Card, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const PageHeader = (props) => {
  const { title, subtitle, icon } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#f4f5fd",
    },
    PageHeader: {
      padding: theme.spacing(4),
      display: "flex",
      marginBottom: theme.spacing(2),
    },
    pageIcon: {
      display: "inline-block",
      padding: theme.spacing(2),
      color: "#3c44b1",
    },
    pageTitle: {
      paddingLeft: theme.spacing(4),
      "& .MuiTypography-subtitle2": {
        opacity: "0.5",
      },
    },
  }));

  const classes = useStyles();

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.PageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>

        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subtitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
