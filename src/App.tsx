import React, {Component} from 'react';
import './App.css';

type AppProps = { name: string };

export const label = (name: string) => {
  return `Hello ${name.toUpperCase()}`;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class App1 extends Component<AppProps> {
  render() {
    return (
      <div>
        <h1>{label(this.props.name)}</h1>
      </div>
    );
  }
}

const App: React.FC<AppProps> = (props) => {
  return (
    <div>
      <h1>{label(props.name)}</h1>
    </div>
  );
};

export default App;
