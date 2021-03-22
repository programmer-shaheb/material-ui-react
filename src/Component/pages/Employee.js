import React from "react";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PageHeader from "../../Component/PageHeader";
import EmployeeForm from "./EmployeeForm";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const Employee = () => {
  const classes = useStyles();
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form Design With Validation"
        icon={<PeopleOutlineIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
};

export default Employee;
