import React, {Component} from "react";
import './Counter.css';

interface CounterProps {
  label?: string;
  start?: number;
}

interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {

  static defaultProps = {
    label: 'Count',
    start: 0
  };

  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.start!,
    }
  }

  render() {
    return (
      <div className="counter">
        <label>{this.props.label}</label>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

export default Counter;
