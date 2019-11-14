import React, {Component} from 'react';
import Heading from "./Heading";
import Counter from "./Counter";
import ActionLink from "./ActionLink";

interface CounterState {
  count: number
}

class App extends Component<object, CounterState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = (isShift: boolean) => {
    const inc: number = isShift ? 10 : 1;
    this.setState(state => ({count: state.count + inc}));
  };

  render() {
    return <div>
      <Heading name='world'/>
      <Counter
        count={this.state.count}
        label={'Current'}
        onCounterIncrease={this.increment}/>
      <ActionLink/>
    </div>;
  }
}

export default App;
