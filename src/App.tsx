import React, {Component} from 'react';
import Heading from "./Heading";
import Counter from "./Counter";
import ActionLink from "./ActionLink";
import NumberList from "./NumberList";
import Greeting from './greeting/Greeting';
import FancyBorder from "./fancy-border/FancyBorder";
import Toolbar from "./theme/Toolbar";
import {Theme, ThemeContext, themes} from "./theme/Themes";

interface AppState {
  count: number;
  isLoggedIn: boolean;
  theme: Theme;
}

class App extends Component<object, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
      isLoggedIn: false,
      theme: themes.light,
    };
  }

  increment = (isShift: boolean) => {
    const inc: number = isShift ? 10 : 1;
    this.setState(state => ({count: state.count + inc}));
  };

  private toggleLogin = () => {
    this.setState(state => ({isLoggedIn: !state.isLoggedIn}));
  };

  private toggleTheme = () => {
    console.log('this.state.theme', this.state.theme);
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  };

  render() {
    return <div>
      <FancyBorder color="green">
        <Heading name='world'/>
      </FancyBorder>
      <Counter
        count={this.state.count}
        label={'Current'}
        onCounterIncrease={this.increment}/>
      <ActionLink onClick={this.toggleLogin}/>
      <Greeting isLoggedIn={this.state.isLoggedIn}/>
      <NumberList numbers={[1, 2, 3]}/>
      <ThemeContext.Provider value={this.state.theme}>
        <Toolbar changeTheme={this.toggleTheme}/>
      </ThemeContext.Provider>
    </div>;
  }
}

export default App;
