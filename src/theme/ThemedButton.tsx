import React from "react";
import {ThemeContext} from "./Themes";

interface ThemedButtonProps {
  [key: string]: any;
}

class ThemedButton extends React.Component<ThemedButtonProps> {
  static contextType = ThemeContext;
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}

export default ThemedButton;
