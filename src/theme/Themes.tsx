import React from "react";

export interface Theme {
  foreground: string;
  background: string;
}
export interface IThemeContext {
  theme: Theme,
  toggleTheme: ( ) => void,
}

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext<IThemeContext>({
  theme: themes.light,
  toggleTheme: () => {},
});
