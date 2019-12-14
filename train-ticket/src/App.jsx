import React, { Component, useState, createContext } from "react";

const CountContext = createContext();

class Foo extends Component {
  state = {};
  render() {
    return (
      <CountContext.Consumer>
        {count => {
          count;
        }}
      </CountContext.Consumer>
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
      <CountContext.Provider value={count}>
        <Foo />
      </CountContext.Provider>
    </div>
  );
}

export default App;
