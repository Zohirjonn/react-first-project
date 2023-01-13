import React from "react";

class count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  reset() {
    this.setState({
      count: 0,
    });
  }
  render() {
    return (
      <div id="n1">
        <h1> Count: {this.state.count}</h1>
        <button type="button" onClick={(e) => this.increment(e)}>
          Increment
        </button>
        <button type="button" onClick={(e) => this.decrement(e)}>
          Decrement
        </button>
        <button onClick={(e) => this.reset(e)}>Reset</button>
      </div>
    );
  }
}

export default count;
