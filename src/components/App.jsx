import React from "react";
function App() {
  const [count, setcount] = React.useState(0);
  function increase() {
    setcount(count + 1);
  }
  function decrease() {
    setcount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
