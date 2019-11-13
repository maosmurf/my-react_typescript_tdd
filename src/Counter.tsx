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

  incCounter(event?: React.MouseEvent<HTMLElement>): void {
    const inc = event && event.shiftKey ? 10 : 1;
    this.setState({count: this.state.count + inc});
  }

  render() {
    return (
      <div className="counter" onClick={this.incCounter.bind(this)}>
        <label>{this.props.label}</label>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

export default Counter;
