import React, { useContext, useEffect } from 'react';
import './_common.scss';
import './App.scss';
import themeContext from './context/theme/themeContext';
import MenuBar from './components/MenuBar/MenuBar';
import WindowContainer from './container/WindowContainer';
import Intro from './components/Intro/Intro';



function App() {
  const { theme, setTheme } = useContext(themeContext);
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);
  useEffect(() => {
    Object.entries(theme).forEach(color => {
      document.documentElement.style.setProperty(`--${color[0]}`, color[1]);
    });
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    const menuBar = document.querySelector('#mobile-menu');
    var init = () => {
      setFontSize();
      bindEvent();
    };
    function setFontSize() {
      var cWidth = root.clientWidth;
      if (cWidth <= 414) {
        root.style.fontSize = cWidth / 37.5 + 'px';
      } else {
        if (root.style.fontSize !== '62.5%') {
          root.style.fontSize = '62.5%';
        }
      }
    }
    function toggleMenuBar() {
      document.querySelector('.s1 .menubar-l > ul').classList.toggle('show');
    }
    function bindEvent() {
      window.addEventListener('resize', setFontSize, false);
      menuBar.addEventListener('click', toggleMenuBar, false);
    }
    init();
  });

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
    <div className='main'>
      <section className='s1'>
        <MenuBar />
      </section>
      <section className='s2'>
        <div className='container'>
          <div className='greeting-wrapper'>
            <Intro intro={[{ data: '你好，我是若宇', delay: 1000 }]} />
          </div>
          <div>
            <WindowContainer changeTheme={changeTheme} />
          </div>
        </div>
      </section>
      <section className='s3'>
        <p>Copyright © Ruoyu Wang {new Date().getFullYear()}</p>
      </section>
    </div>
  );
}

export default App;
