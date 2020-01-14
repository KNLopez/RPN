import React, { useState } from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import { StyledButton } from "./shared/StyledButton";
import { StyledInput } from "./shared/StyledInput";
import { StyledSelect } from "./shared/StyledSelect";

const Screen2 = ({ handleClick, formattedState, solution }) => {
  const [state, setState] = useState({
    operand: "",
    operator: ""
  });
  const { operand, operator } = state;

  const [withError, setError] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name);
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    setError(false);
    if (operand && operator) handleClick([operand, operator]);
    else {
      setError(true);
    }
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className="main-container"
    >
      <Box
        mb={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className="notation-container"
      >
        <Grid spacing={2} container alignItems="center" justify="center">
          {formattedState.map(item => (
            <Grid item key={`${item}+${Math.random() * 9999}`}>
              <Box p={6} className="container-box">
                <Typography variant="h4"> {item}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h2" align="center">
          =
        </Typography>
        <Typography variant="h2" align="center" className="green-title">
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
          <StyledButton fullWidth onClick={handleSubmit}>
            Add Operation
          </StyledButton>
        </Grid>
      </Grid>
      {withError && (
        <Typography className="error">Please fill in all fields</Typography>
      )}
    </Grid>
  );
};

export default Screen2;
