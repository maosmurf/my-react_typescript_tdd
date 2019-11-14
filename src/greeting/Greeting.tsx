import React, {Component} from "react";
import Loadable from 'react-loadable';
import GuestGreeting from "./GuestGreeting";

const loadingDivStyle = {
  'display': 'block',
  'background': 'red',
  'width': '500px',
  'height': '500px'
};

const LazyUserGreeting = Loadable({
  loader: () => import('./UserGreeting'),
  loading: (props: {pastDelay: boolean}) => props.pastDelay ? <div style={loadingDivStyle}/> : null,
});

interface GreetingProps {
  isLoggedIn: boolean;
}

class Greeting extends Component<GreetingProps> {
  render() {
    if (this.props.isLoggedIn) {
      return <LazyUserGreeting/>;
    }
    return <GuestGreeting/>;
  }
}

export default Greeting;
