import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.decreaseHandler = () => {
      this.setState({ count: this.state.count - 1 });
    };
    this.increaseHandler = () => {
      this.setState({ count: this.state.count + 1 });
    };
  }

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
