import React, { useContext, useEffect } from 'react';
import './App.scss';
import themeContext from './context/theme/themeContext';
// import './_color.scss';
import ThemeDot from './components/ThemeDot';

function App() {
  const { theme, setTheme } = useContext(themeContext);
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    console.log(Object.entries(theme));
    Object.entries(theme).forEach(color => {
      document.documentElement.style.setProperty(`--${color[0]}`, color[1]);
    });
  }, [theme]);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };
  const changeTheme = e => {
    console.log(e.target.dataset.mode);
    let mode = e.target.dataset.mode;
    mode && setMode(mode);
  };
  return (
    <>
      <div className='App'>hello world</div>
      <ThemeDot changeTheme={changeTheme} />
    </>
  );
}

export default App;
