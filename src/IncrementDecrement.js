import React, { useState } from "react";

const IncrementDecrement = () => {
  const [count, setCount] = useState(0);

  const functionIncrement = () => {
    setCount(count + 1);
  };

  const functionDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={functionIncrement}>{"Increment"}</button>
      <button onClick={functionDecrement}>{"Decrement"}</button>
    </>
  );
};

export default IncrementDecrement;
