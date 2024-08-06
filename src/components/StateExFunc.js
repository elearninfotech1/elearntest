import React, { useEffect, useState } from "react";

const StateExFunc = () => {
  const [name, SetName] = useState("Elearn");
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    document.title = `you clicked ${counter}`;
  });
  return (
    <div>
      <h1>Name is {name}</h1>
      <button onClick={() => SetName("Suresh")}>click me</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default StateExFunc;
