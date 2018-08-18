import React from 'react';

const ThemeContext = React.createContext({
  main: '#a3d6c8',
  light: '#fff',
  dark: '#4c4a4b'
});

export const withTheme = (Component) => (
  (props) => (
    <ThemeContext.Consumer>
      {theme => <Component {...props} theme={theme} />}
    </ThemeContext.Consumer>
  )
);
