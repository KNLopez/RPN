import React, { useState, useEffect } from 'react';
import ReversePolishNotationPresenter from "./ReversePolishNotation.presenter"
import {RPN} from "../utils/RPN"


const ReversePolishNotationContainer = () => {

  const [stack, setStack] = useState([])
  const [solution, setSolution] = useState()


  const getSolution = () => {
    const response = RPN(stack)
    if(typeof response === "number") setSolution(response);
    else{
      setSolution(stack[0]);
    }

  }

  const updateState = ( stackItem ) => {
   setStack([...stack, ...stackItem]);
  }

  useEffect(() => {
    getSolution();
  }, [stack]);


  return (
    <ReversePolishNotationPresenter
      solution={solution}
      stack={stack}
      updateState={updateState}
    />
  );
}

export default ReversePolishNotationContainer;