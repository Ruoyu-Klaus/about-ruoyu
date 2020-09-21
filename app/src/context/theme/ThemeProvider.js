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
  blue: {
    mainColor: '#15202b',
    secondaryColor: '#192734',
    linkColor: '#fff',
    borderColor: '#164d56',
    mainText: '#fff',
    secondaryText: '#eeeeee',
    themeDotBorder: '#fff',
    previewBg: 'rgb(25, 39, 52, 0.8)',
    previewShadow: '#111921',
    buttonColor: '#17a2b8',
  },
  navy: {
    mainColor: '#7886eb',
    secondaryColor: 'rgb(65, 85, 137)',
    linkColor: '#000',
    borderColor: '#164d56',
    mainText: '#fff',
    secondaryText: '#e5dcff',
    themeDotBorder: '#fff',
    previewBg: 'rgba(109, 133, 160, 0.81)',
    previewShadow: 'rgb(107, 123, 167)',

    buttonColor: '#17a2b8',
  },
  green: {
    mainColor: '#606b56',
    secondaryColor: '#515a48',
    borderColor: '#161914',
    linkColor: ' #fff',
    mainText: ' #fff',
    secondaryText: '#eeeeee',
    themeDotBorder: '#fff',
    previewBg: 'rgb(81, 90, 72, 0.8)',
    previewShadow: '#2a2f25',
    buttonColor: '#669966',
  },
  purple: {
    mainColor: '#46344e',
    secondaryColor: '#382a3f',
    borderColor: '#1d1520',
    linkColor: '#fff',
    mainText: ' #fff',
    secondaryText: '#eeeeee',
    themeDotBorder: '#fff',
    previewBg: 'rgb(29, 21, 32, 0.8)',
    previewShadow: '#2b202f',
    buttonColor: '#8534a3',
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
