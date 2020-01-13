import React from "react";
import Container from "@material-ui/core/Container";
import Screen1 from "../components/Screen1";
import Screen2 from "../components/Screen2";

const ReversePolishNotationPresenter = ({ solution, stack, updateState }) => {
  return (
    <Container maxWidth="sm">
      {stack.length > 0 && (
        <Screen2
          formattedState={stack}
          solution={solution}
          handleClick={updateState}
        />
      )}
      {stack.length < 1 && <Screen1 handleClick={updateState} />}
    </Container>
  );
};

export default ReversePolishNotationPresenter;
