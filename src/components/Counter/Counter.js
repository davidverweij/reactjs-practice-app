import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };
  decreaseHandler = () => {
    this.setState({ count: this.state.count - 1 });
  };
  increaseHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.decreaseHandler}>-</button>
        <span> {this.state.count} </span>
        <button onClick={this.increaseHandler}>+</button>
      </div>
    );
  }
}

export default Counter;
