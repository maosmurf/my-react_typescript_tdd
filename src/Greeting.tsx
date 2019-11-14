import {Component, FC} from "react";
import React from "react";

const UserGreeting: FC = () => <h2>Welcome back!</h2>;
const GuestGreeting: FC = () => <h2>Please sign up.</h2>;

interface GreetingProps {
  isLoggedIn: boolean;
}

class Greeting extends Component<GreetingProps> {
  render() {
    if (this.props.isLoggedIn) {
      return <UserGreeting/>;
    }
    return <GuestGreeting/>;
  }
}

export default Greeting;
