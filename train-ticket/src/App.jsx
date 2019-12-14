import React, { Component, useState, createContext } from "react";

const CountContext = createContext();

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
      <CountContext.Provider value={count}></CountContext.Provider>
    </div>
  );
}

export default App;
