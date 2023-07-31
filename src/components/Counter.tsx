import { styled } from "@mui/material";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const CounterWrapper = styled("form")({
    color: "#000000",
  });

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <CounterWrapper>
      <button data-testid="increment" onClick={incrementCounter}>
        +
      </button>
      <p data-testid="counter" color="black">
        {counter}
      </p>
      <button data-testid="decrement" onClick={decrementCounter}>
        -
      </button>
    </CounterWrapper>
  );
};

export default Counter;
