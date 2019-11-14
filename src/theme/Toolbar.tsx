import {Component} from "react";
import ThemedButton from "./ThemedButton";
import React from "react";

interface ToolbarProps {
  changeTheme: () => void;
}

class Toolbar extends Component<ToolbarProps> {
  render() {
    return (
      <ThemedButton onClick={this.props.changeTheme}>
        Change Theme
      </ThemedButton>
    );
  }
}

export default Toolbar;
