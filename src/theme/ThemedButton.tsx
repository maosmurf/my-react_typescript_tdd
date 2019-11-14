import React from "react";
import {ThemeContext} from "./Themes";

interface ThemedButtonProps {
  [key: string]: any;
}

class ThemedButton extends React.Component<ThemedButtonProps> {
  static contextType = ThemeContext;

  render() {
    let context: React.ContextType<typeof ThemeContext> = this.context;
    return (
      <button
        {...this.props}
        onClick={context.toggleTheme}
        style={{backgroundColor: context.theme.background}}
  />
    );
  }
}

export default ThemedButton;
