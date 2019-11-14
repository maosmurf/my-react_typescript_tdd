import React, {Component} from "react";

interface ActionLinkProps {
  isToggleOn: boolean;
  onClick: () => void;
}

class ActionLink extends Component<ActionLinkProps> {

  static defaultProps = {isToggleOn: false};

  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default ActionLink;
