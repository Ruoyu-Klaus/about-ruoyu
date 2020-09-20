import React, { useReducer } from 'react';
import ThemeContext from './themeContext';
import ThemeReducer from './themeReducer';

const themes = {
  default: {
    mainColor: '#eaeaea',
    secondaryColor: '#fff',
    linkColor: '#699',
    borderColor: '#c1c1c1',
    mainText: 'black',
    secondaryText: '#4b5156',
    themeDotBorder: '#24292e',
    previewBg: 'rgb(251, 249, 243, 0.8)',
    previewShadow: '#f0ead6',
    buttonColor: 'black',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeProvider = props => {
  const initialState = themes.default;
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const setTheme = theme => {
    if (['blue', 'green', 'navy', 'purple'].includes(theme)) {
      dispatch({ type: 'TOGGLE_THEME', payload: themes[theme] });
    } else {
      dispatch({ type: 'TOGGLE_THEME', payload: themes['default'] });
    }
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme: state, setTheme }}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
