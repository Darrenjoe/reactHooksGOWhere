import React, { Component } from "react";
import "./App.css";

class Foo extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.name === this.props.name) {
      return false;
    }
    return true;
  }
  render() {
    console.log(1);
    return <div></div>;
  }
}
class App extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          add
        </button>
        <Foo name="Mike" />
      </div>
    );
  }
}

export default App;
