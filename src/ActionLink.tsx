import React, {Component} from "react";

interface ActionLinkState {
  isToggleOn: boolean;
}

class ActionLink extends Component<object, ActionLinkState> {

  constructor(props: Readonly<object>) {
    super(props);
    this.state = {
      isToggleOn: false,
    }
  }

  private handleClick = () => {
    console.log('The link was clicked.');
    this.setState(state => ({isToggleOn: !state.isToggleOn}));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default ActionLink;
