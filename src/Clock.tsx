import React, {Component} from "react";

interface ClockState {
  date: Date;
}

class Clock extends Component<object, ClockState> {

  private timerId: number | undefined;

  constructor(props: Readonly<object>) {
    super(props);
    this.state = {date: new Date()};
  }


  render() {
    return <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
  }

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const date = new Date();
      console.log(date);
      this.setState({date});
    }, 1000);
  }


  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }
}

export default Clock;
