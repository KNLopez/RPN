import React, { useState } from "react";
import {  Grid, Select, MenuItem, Paper, Box, Typography } from "@material-ui/core";
import { StyledButton } from "./shared/StyledButton";
import { StyledInput } from "./shared/StyledInput";
import { StyledSelect } from "./shared/StyledSelect";


const Screen2 = ({ handleClick, formattedState, solution }) => {
  const [state, setState] = useState({
    operand: "",
    operator: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name);
    setState({ ...state, [name]: value });
  };

  const { operand, operator } = state;

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Box
        mb={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid spacing={2} container alignItems="center" justify="center">
          {formattedState.map(item => (
            <Grid item key={`${item}+${Math.random() * 9999}`}>
              <Box p={6} style={{ backgroundColor: "#ecf5f7", borderRadius: 10 }}>
                <Typography variant="h4"> {item}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h2" align="center">
          =
        </Typography>
        <Typography
          variant="h2"
          align="center"
          style={{
            maxWidth: 380,
            color: "#93edd9",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 100
          }}
        >
          {solution}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item md={4} xs={6}>
          <StyledSelect
            fullWidth
            value={operator}
            onChange={handleChange}
            label="Operator"
            name="operator"
            options={["+", "-", "*", "/"]}
          />
        </Grid>
        <Grid item md={4} xs={6}>
          <StyledInput
            label="Operand"
            type="number"
            fullWidth
            value={operand}
            onChange={handleChange}
            name="operand"
            variant="filled"
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <StyledButton
            fullWidth
            onClick={() => handleClick([operand, operator])}
          >
            Add Operation
          </StyledButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Screen2;
