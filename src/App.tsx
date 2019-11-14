import React, {Component} from 'react';
import Heading from "./Heading";
import Counter from "./Counter";
import ActionLink from "./ActionLink";
import NumberList from "./NumberList";
import Greeting from './greeting/Greeting';

interface AppState {
  count: number;
  isLoggedIn: boolean;
}

class App extends Component<object, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
      isLoggedIn: false,
    };
  }

  increment = (isShift: boolean) => {
    const inc: number = isShift ? 10 : 1;
    this.setState(state => ({count: state.count + inc}));
  };

  private toggleLogin = () => {
    this.setState(state => ({isLoggedIn: !state.isLoggedIn}));

  };

  render() {
    return <div>
      <Heading name='world'/>
      <Counter
        count={this.state.count}
        label={'Current'}
        onCounterIncrease={this.increment}/>
      <ActionLink onClick={this.toggleLogin}/>
      <Greeting isLoggedIn={this.state.isLoggedIn}/>
      <NumberList numbers={[1,2,3]}/>
    </div>;
  }
}

export default App;
