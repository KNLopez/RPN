import React, { useState } from 'react'
import { Typography, Grid, Box } from '@material-ui/core'
import { StyledButton } from './shared/StyledButton'
import { StyledInput } from './shared/StyledInput'

const Screen1 = ({handleClick}) => {

  const [operand, setOperand] = useState("")

  const handleChange = (e) => {
    setOperand(e.target.value)
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Box mb={6}>
        <Typography
          variant="h3"
          align="center"
          style={{
            maxWidth: 380,
            color: "#93edd9",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 100,
          }}
        >
          Expression Evaluator
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <StyledInput
            variant="filled"
            type="number"
            fullWidth
            value={operand}
            onChange={handleChange}
            label="Please enter a number"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <StyledButton fullWidth onClick={() => handleClick(operand)}>
            Add Number
          </StyledButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Screen1