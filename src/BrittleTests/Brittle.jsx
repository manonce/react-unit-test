import React, { Component } from "react";

export default class Brittle extends Component {
  state = {
    number: 0
  };

  incrementNumber = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  };

  render() {
    const { number } = this.state;
    return (
      <div>
        <div data-testid="increment-number">{number}</div>
        <button data-testid="increment-button" onClick={this.incrementNumber}>
          Increment Number
        </button>
      </div>
    );
  }
}
