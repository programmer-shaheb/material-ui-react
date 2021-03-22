import { Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useForm from "../useForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = () => {
  const classes = useStyles();

  const { values, setValues, handleInputChange } = useForm(initialValues);
  return (
    <form>
      <Grid container className={classes.root}>
        <Grid item xs={6}>
          <TextField
            label="Full Name"
            value={values.fullName}
            name="fullName"
            variant="outlined"
            onChange={handleInputChange}
          />
          <TextField
            name="email"
            label="Email"
            value={values.email}
            variant="outlined"
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}></Grid>
      </Grid>
    </form>
  );
};

export default EmployeeForm;
