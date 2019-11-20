import React, {Component, lazy, Suspense} from 'react';
import Heading from "./Heading";
import Counter from "./Counter";
import ActionLink from "./ActionLink";
import NumberList from "./NumberList";
import Greeting from './greeting/Greeting';
import FancyBorder from "./fancy-border/FancyBorder";
import Toolbar from "./theme/Toolbar";
import {IThemeContext, ThemeContext, themes} from "./theme/Themes";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Riddle from "./Riddle";
import PlanetComp from "./planets/PlanetComp";

interface AppState {
  count: number;
  isLoggedIn: boolean;
  themeContext: IThemeContext;
}

class App extends Component<object, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
      isLoggedIn: false,
      themeContext: {
        theme: themes.light,
        toggleTheme: this.toggleTheme,
      },
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
    console.log('this.state.theme', this.state.themeContext);

    this.setState(state => ({
        themeContext: {
          theme: state.themeContext.theme === themes.dark ? themes.light : themes.dark,
          toggleTheme: state.themeContext.toggleTheme,
        }
      }
    ));

  };

  render() {

    const Home = lazy(() => import('./Home'));

    const navItems = [
      '/',
      '/riddle',
      '/politik',
      '/planet/3',
      '/planet/4',
    ].map((target) =>
      <li key={target} style={{display: "inline-block", margin: '1em'}}><Link
        to={target}>{target}</Link></li>
    );

    return <div>
      <BrowserRouter>
        <FancyBorder color="green">
          <Heading name='world'/>
        </FancyBorder>
        <ul>{navItems}</ul>
        <Counter
          count={this.state.count}
          label={'Current'}
          onCounterIncrease={this.increment}/>
        <ActionLink onClick={this.toggleLogin}/>
        <Greeting isLoggedIn={this.state.isLoggedIn}/>
        <NumberList numbers={[1, 2, 3]}/>
        <ThemeContext.Provider value={this.state.themeContext}>
          <Toolbar changeTheme={this.toggleTheme}/>
          <span>&#x27fa;</span>
          <Toolbar changeTheme={this.toggleTheme}/>
        </ThemeContext.Provider>
        <Switch>
          <Route path="/planet/:id" render={(props) => {
            return <PlanetComp planetId={props.match.params.id} />;
          }}>
          </Route>
          <Route path="/riddle">
            <Riddle riddleID={'169891'}/>
          </Route>
          <Route path="/*" render={(props) =>
            <Suspense fallback={<h3>...</h3>}>
              <Home url={props.match.url}/>
            </Suspense>
          }>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>;
  }
}

export default App;
