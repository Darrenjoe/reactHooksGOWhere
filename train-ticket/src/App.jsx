import React, { Component, useState } from "react";

class App2 extends Component {
  state = {
    count: 0
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        ></button>
      </div>
    );
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
