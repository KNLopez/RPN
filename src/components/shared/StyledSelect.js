import React from "react";
import {
  makeStyles,
  createStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
const customInputStyle = makeStyles(theme =>
  createStyles({
    root: {
      border: "1px solid #e2e2e1",
      overflow: "hidden",
      borderRadius: 4,
      "& label.Mui-focused": {
        color: "#3f51b5"
      },
      "& .MuiFilledInput-root": {
        background: "transparent"
      }
    },
    focused: {}
  })
);

export const StyledSelect = ({ label, options, ...props }) => {
  const classes = customInputStyle(props);

  return (
    <FormControl fullWidth variant="filled" classes={classes}>
      <InputLabel>{label}</InputLabel>
      <Select {...props} disableUnderline>
        {options.map(option => (
          <MenuItem value={option}> {option} </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
