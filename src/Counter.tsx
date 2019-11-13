import React, {Component} from "react";

interface CounterProps {
  label?: string;
}

class Counter extends Component<CounterProps> {
  render() {
    return (
      <div className="counter">
        <label>{this.props.label}</label>
        <span>1</span>
      </div>
    );
  }
}

export default Counter;
