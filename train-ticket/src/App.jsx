import React, { Component, PureComponent, useState } from "react";

class Counter extends PureComponent {
  render() {
    const { props } = this;
    return <h1>{props.count}</h1>;
  }
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
}

export default App;
