import React, {Component} from 'react';
import './App.css';

type AppProps = { name: string };

export const label = (name: string) => {
  return `Hello ${name.toUpperCase()}`;
};

export class App extends Component<AppProps> {
  render() {
    return (
      <div>
        <h1>{label(this.props.name)}</h1>
      </div>
    );
  }
}
