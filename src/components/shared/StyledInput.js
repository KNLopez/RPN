import React from "react"
import {  TextField, makeStyles, createStyles, fade } from "@material-ui/core";
const customInputStyle = makeStyles(theme =>
  createStyles({
    root: {
      border: "1px solid #e2e2e1",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "#fcfcfb",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:hover": {
        backgroundColor: "#fff"
      },
      "&$focused": {
        backgroundColor: "#fff"
      },
      "& label.Mui-focused": {
        color: "orange"
      }
    },
    input: { color: "#000" },
    focused: {}
  })
);

export  const StyledInput = props => {
    const classes = customInputStyle(props);

    return (
      <TextField
        InputProps={{ classes, disableUnderline: true }}
        {...props}
      />
    );
  };
